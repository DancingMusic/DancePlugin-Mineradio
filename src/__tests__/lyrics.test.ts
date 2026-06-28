import { describe, expect, it } from 'vitest';
import {
  buildFallbackLyric,
  findActiveStageLyricIndex,
  getRenderableStageLyrics,
  getStageLyricProgress,
  splitStageLyricText,
} from '../lyrics';

describe('mineradio stage lyrics helpers', () => {
  it('falls back to song metadata when lyrics are missing', () => {
    expect(buildFallbackLyric('夜航', 'Mineradio')).toEqual([
      { time: 0, text: '夜航 - Mineradio', duration: 9999, fallback: true },
    ]);
    expect(getRenderableStageLyrics([], '夜航', 'Mineradio')[0].text).toBe('夜航 - Mineradio');
  });

  it('filters no-lyric placeholders', () => {
    const lines = getRenderableStageLyrics([
      { time: 0, text: '暂无歌词' },
      { time: 4, text: '真正的第一句' },
    ], 'fallback', 'artist');

    expect(lines).toHaveLength(1);
    expect(lines[0].text).toBe('真正的第一句');
  });

  it('finds active line and smooth progress', () => {
    const lines = getRenderableStageLyrics([
      { time: 2, text: 'first' },
      { time: 6, text: 'second' },
    ]);

    expect(findActiveStageLyricIndex(lines, 1.5)).toBe(-1);
    expect(findActiveStageLyricIndex(lines, 2.1)).toBe(0);
    expect(getStageLyricProgress(lines, 0, 4)).toBeCloseTo(0.51, 2);
  });

  it('splits long lyrics near natural breakpoints', () => {
    expect(splitStageLyricText('berry dreams, dancing through the midnight light', 18)).toEqual([
      'berry dreams,',
      'dancing through the midnight light',
    ]);
  });
});
