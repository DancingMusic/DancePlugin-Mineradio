import type { LyricLine } from '@dancingmusic/plugin-sdk';

export interface StageLyricLine extends LyricLine {
  duration?: number;
  fallback?: boolean;
}

export interface LyricProgressWindow {
  activeIndex: number;
  progress: number;
  line: StageLyricLine | null;
}

const NO_LYRIC_PATTERNS = [
  '纯音乐请欣赏',
  '暂无歌词',
  '暂无歌词敬请期待',
  '此歌曲为没有填词的纯音乐请您欣赏',
];

export function normalizeLyricText(text: string): string {
  return String(text || '').replace(/\s+/g, ' ').trim();
}

export function isNoLyricText(text: string): boolean {
  const compact = String(text || '').replace(/\s+/g, '').replace(/[，,。.!！?？、~～]/g, '');
  return !compact || NO_LYRIC_PATTERNS.includes(compact);
}

export function buildFallbackLyric(title = '', artist = ''): StageLyricLine[] {
  const cleanTitle = normalizeLyricText(title);
  const cleanArtist = normalizeLyricText(artist);
  if (!cleanTitle) return [];
  return [{
    time: 0,
    text: cleanArtist ? `${cleanTitle} - ${cleanArtist}` : cleanTitle,
    duration: 9999,
    fallback: true,
  }];
}

export function getRenderableStageLyrics(
  lyrics: LyricLine[] | undefined,
  title = '',
  artist = '',
): StageLyricLine[] {
  const lines = (lyrics || [])
    .map(line => ({
      ...line,
      time: Number.isFinite(line.time) ? Math.max(0, line.time) : 0,
      text: normalizeLyricText(line.text),
    }))
    .filter(line => line.text && !isNoLyricText(line.text))
    .sort((a, b) => a.time - b.time);

  if (!lines.length) return buildFallbackLyric(title, artist);

  return lines.map((line, index) => {
    const next = lines[index + 1];
    const inferred = next && next.time > line.time ? next.time - line.time : 4.8;
    return {
      ...line,
      duration: Math.max(0.75, Math.min(12, inferred)),
    };
  });
}

export function findActiveStageLyricIndex(lyrics: StageLyricLine[], currentTime: number): number {
  let active = -1;
  for (let i = 0; i < lyrics.length; i += 1) {
    if (lyrics[i].time <= currentTime + 0.05) active = i;
    else break;
  }
  return active;
}

export function getStageLyricProgress(lyrics: StageLyricLine[], activeIndex: number, currentTime: number): number {
  if (activeIndex < 0 || activeIndex >= lyrics.length) return 0;
  const line = lyrics[activeIndex];
  const next = lyrics[activeIndex + 1];
  const endTime = next && next.time > line.time
    ? next.time
    : line.time + Math.max(0.75, line.duration || 4.8);
  const span = Math.max(0.75, endTime - line.time);
  const raw = Math.max(0, Math.min(1, (currentTime + 0.02 - line.time) / span));
  return raw * raw * (3 - 2 * raw);
}

export function getLyricProgressWindow(lyrics: StageLyricLine[], currentTime: number): LyricProgressWindow {
  const activeIndex = findActiveStageLyricIndex(lyrics, currentTime);
  return {
    activeIndex,
    line: activeIndex >= 0 ? lyrics[activeIndex] : null,
    progress: getStageLyricProgress(lyrics, activeIndex, currentTime),
  };
}

export function visualLength(text: string): number {
  return Array.from(text).reduce((total, char) => total + (char.charCodeAt(0) > 255 ? 1 : 0.56), 0);
}

export function splitStageLyricText(text: string, maxVisualLength = 23): string[] {
  const normalized = normalizeLyricText(text);
  if (!normalized) return [''];
  if (visualLength(normalized) <= maxVisualLength) return [normalized];

  const chars = Array.from(normalized);
  const midpoint = chars.length / 2;
  const hardBreaks = new Set([',', '.', ';', ':', '?', '!', '，', '。', '；', '：', '？', '！', '、']);
  const softBreaks = new Set([' ', ...hardBreaks]);
  const findBestBreak = (breaks: Set<string>, maxDistance = Number.POSITIVE_INFINITY) => {
    let best = -1;
    let bestDistance = Number.POSITIVE_INFINITY;
    for (let i = 1; i < chars.length - 1; i += 1) {
      if (!breaks.has(chars[i])) continue;
      const distance = Math.abs(i - midpoint);
      if (distance > maxDistance || distance >= bestDistance) continue;
      best = i + 1;
      bestDistance = distance;
    }
    return best;
  };

  const hardBreak = findBestBreak(hardBreaks, midpoint * 0.7);
  const breakIndex = hardBreak >= 0 ? hardBreak : (findBestBreak(softBreaks) >= 0 ? findBestBreak(softBreaks) : Math.ceil(chars.length / 2));
  const first = chars.slice(0, breakIndex).join('').trim();
  const second = chars.slice(breakIndex).join('').trim();
  return second ? [first, second] : [normalized];
}
