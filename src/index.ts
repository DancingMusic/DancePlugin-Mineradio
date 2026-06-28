import * as THREE from 'three';
import type { AudioData, DanceHostActions, DancePlugin, DancePluginConfig, LyricLine } from '@dancingmusic/plugin-sdk';
import thumbnailUrl from './mineradio-thumbnail.svg';
import {
  getLyricProgressWindow,
  getRenderableStageLyrics,
  splitStageLyricText,
  type StageLyricLine,
} from './lyrics';
import { computeMineradioStageMotion, getMineradioRippleTrigger } from './motion';
import { getMineradioPalette, hexToRgb, rgba, type MineradioPalette } from './palette';
import {
  MINERADIO_DEFAULT_SETTINGS,
  MINERADIO_SETTING_SECTIONS,
  MINERADIO_SETTINGS_SCHEMA,
  normalizeMineradioSettings,
  type MineradioPluginSettings,
} from './settings';

interface SongInfo {
  title: string;
  artist: string;
  cover?: string;
  lyrics?: LyricLine[];
}

interface PlaylistSongInfo extends SongInfo {
  shelfType?: 'queue' | 'playlist';
  tag?: string;
  subtitle?: string;
  playlistId?: string;
  source?: string;
  trackCount?: number;
  queueIndex?: number;
  url?: string;
}

interface PlaylistCollectionInfo {
  id: string;
  title: string;
  subtitle?: string;
  cover?: string;
  tag?: string;
  source?: string;
  trackCount?: number;
}

interface MineradioShelfCard {
  group: THREE.Group;
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  texture: THREE.CanvasTexture;
  item: PlaylistSongInfo;
  index: number;
  relativeIndex: number;
  active: boolean;
  isCenter: boolean;
  selected: boolean;
  floatMix: number;
  fxPulse: number;
  dofBlur: number;
  dofBucket: number;
  drawKey: string;
}

const PLANE_SIZE = 4.8;
const COVER_RESOLUTION = 1.55;
const RIPPLE_MAX = 12;
const INTRO_FADE_SECONDS = 0.52;
const LYRIC_SPARK_COUNT = 132;
const LYRIC_STAR_RIVER_COUNT = 420;
const SHELF_VISIBLE_RADIUS = 5;
const CLICK_THRESHOLD = 6;
const PARTICLE_POINTER_SPIN_X = 0.0032;
const PARTICLE_POINTER_SPIN_Y = 0.0034;
const PARTICLE_SPIN_MAX = 6.2;

interface MineradioRipple {
  x: number;
  y: number;
  age: number;
  str: number;
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function smoothstep(value: number): number {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
}

function seededUnit(seed: number): number {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function fontFamily(): string {
  return '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", Inter, system-ui, sans-serif';
}

function lyricFontStackForKey(key: string): string {
  if (key === 'hei') return '"Noto Sans SC","Microsoft YaHei",SimHei,"PingFang SC",sans-serif';
  if (key === 'song') return '"Noto Serif SC","Source Han Serif SC",SimSun,"Songti SC",serif';
  if (key === 'bold-song') return '"Source Han Serif SC Heavy","Source Han Serif SC","Noto Serif SC Black","Noto Serif SC","STZhongsong","SimSun",serif';
  if (key === 'stone-song') return '"FZYaSongS-B-GB","FZCuSong-B09S","Source Han Serif SC Heavy","Noto Serif SC Black","STZhongsong","SimSun",serif';
  if (key === 'kai-song') return '"Kaiti SC","STKaiti","KaiTi","Source Han Serif SC","Noto Serif SC",serif';
  if (key === 'serif-en') return 'Georgia,"Times New Roman","Noto Serif SC","Source Han Serif SC",serif';
  if (key === 'gothic') return '"UnifrakturCook","UnifrakturMaguntia","Old English Text MT","Blackletter","Cinzel Decorative","Noto Serif SC",serif';
  if (key === 'editorial') return '"Didot","Bodoni 72","Libre Baskerville",Georgia,"Noto Serif SC",serif';
  if (key === 'humanist') return '"Avenir Next","Segoe UI","Inter","Noto Sans SC","PingFang SC",sans-serif';
  if (key === 'mono') return '"JetBrains Mono",Consolas,"Noto Sans SC","Microsoft YaHei",monospace';
  if (key === 'display') return '"Alibaba PuHuiTi","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
  return fontFamily();
}

function lyricFont(size: number, weight = 900, key = 'hei'): string {
  return `${weight} ${size}px ${lyricFontStackForKey(key)}`;
}

function measureTextWithLetterSpacing(ctx: CanvasRenderingContext2D, text: string, spacing: number): number {
  if (!spacing || text.length < 2) return ctx.measureText(text).width;
  return Array.from(text).reduce((sum, char, index) => sum + ctx.measureText(char).width + (index > 0 ? spacing : 0), 0);
}

function drawTextWithLetterSpacing(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  spacing: number,
  stroke: boolean,
): void {
  if (!spacing || text.length < 2) {
    if (stroke) ctx.strokeText(text, x, y);
    else ctx.fillText(text, x, y);
    return;
  }
  const chars = Array.from(text);
  const width = measureTextWithLetterSpacing(ctx, text, spacing);
  let cursor = x - width / 2;
  chars.forEach((char, index) => {
    const charWidth = ctx.measureText(char).width;
    const cx = cursor + charWidth / 2;
    if (stroke) ctx.strokeText(char, cx, y);
    else ctx.fillText(char, cx, y);
    cursor += charWidth + (index < chars.length - 1 ? spacing : 0);
  });
}

function colorToVector(hex: string, fallback = '#d6f8ff', boost = 0.42): THREE.Color {
  const c = hexToRgb(hex || fallback);
  return new THREE.Color(
    Math.min(1, c.r / 255 + boost * 0.08),
    Math.min(1, c.g / 255 + boost * 0.08),
    Math.min(1, c.b / 255 + boost * 0.08),
  );
}

function makeDotTexture(): THREE.CanvasTexture {
  const cv = document.createElement('canvas');
  cv.width = 64;
  cv.height = 64;
  const ctx = cv.getContext('2d');
  if (ctx) {
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 31);
    g.addColorStop(0.00, 'rgba(255,255,255,0.96)');
    g.addColorStop(0.42, 'rgba(255,255,255,0.78)');
    g.addColorStop(0.72, 'rgba(255,255,255,0.22)');
    g.addColorStop(1.00, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}

function makeSolidCanvas(color = '#1c1c28', size = 4): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  if (ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, size, size);
  }
  return c;
}

function drawRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number,
): void {
  const chars = Array.from(String(text || ''));
  let line = '';
  const lines: string[] = [];
  for (const char of chars) {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
      if (lines.length >= maxLines - 1) break;
    } else {
      line = test;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  lines.forEach((next, index) => ctx.fillText(next, x, y + index * lineHeight));
}

function readableInkForHex(hex: string): string {
  const { r, g, b } = hexToRgb(hex || '#ffffff');
  const luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
  return luminance > 0.62 ? '#08090b' : '#ffffff';
}

function visualPresetIndex(preset: MineradioPluginSettings['preset']): number {
  if (preset === 'tunnel') return 1;
  if (preset === 'orbit') return 2;
  if (preset === 'void') return 3;
  if (preset === 'vinyl') return 4;
  if (preset === 'wallpaper') return 5;
  return 0;
}

function maxPixelRatioForQuality(quality: MineradioPluginSettings['performanceQuality']): number {
  if (quality === 'eco') return 1;
  if (quality === 'balanced') return 1.4;
  if (quality === 'ultra') return 2.5;
  return 2;
}

function makeShelfCardCanvas(song: PlaylistSongInfo, active: boolean, accent: string): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 360;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  const title = song.title || 'DancingMusic';
  const artist = song.artist || 'Playlist';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bg.addColorStop(0, 'rgba(255,255,255,0.12)');
  bg.addColorStop(0.55, 'rgba(18,20,24,0.88)');
  bg.addColorStop(1, 'rgba(0,0,0,0.72)');
  drawRoundRect(ctx, 10, 10, canvas.width - 20, canvas.height - 20, 34);
  ctx.fillStyle = bg;
  ctx.fill();
  ctx.lineWidth = active ? 3 : 1.5;
  ctx.strokeStyle = active ? rgba(accent, 0.72) : 'rgba(255,255,255,0.16)';
  ctx.stroke();

  const coverX = 34;
  const coverY = 42;
  const coverSize = 248;
  drawRoundRect(ctx, coverX, coverY, coverSize, coverSize, 24);
  ctx.fillStyle = 'rgba(255,255,255,0.07)';
  ctx.fill();
  const coverGradient = ctx.createLinearGradient(coverX, coverY, coverX + coverSize, coverY + coverSize);
  coverGradient.addColorStop(0, rgba(accent, active ? 0.34 : 0.20));
  coverGradient.addColorStop(0.55, 'rgba(255,255,255,0.11)');
  coverGradient.addColorStop(1, 'rgba(0,0,0,0.18)');
  ctx.fillStyle = coverGradient;
  ctx.fill();
  ctx.save();
  ctx.clip();
  for (let i = 0; i < 220; i += 1) {
    const seed = i * 19.17 + title.length * 7.31 + artist.length * 3.13;
    const x = coverX + seededUnit(seed) * coverSize;
    const y = coverY + seededUnit(seed * 1.7) * coverSize;
    ctx.globalAlpha = 0.18 + seededUnit(seed * 2.3) * 0.42;
    ctx.fillStyle = seededUnit(seed * 3.4) > 0.62 ? rgba(accent, 1) : 'rgba(255,255,255,0.78)';
    ctx.beginPath();
    ctx.arc(x, y, 1.2 + seededUnit(seed * 4.1) * 3.2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
  ctx.globalAlpha = 1;

  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'rgba(255,255,255,0.58)';
  ctx.font = `700 25px ${fontFamily()}`;
  ctx.fillText(active ? 'NOW PLAYING' : 'QUEUE', 318, 68);
  ctx.fillStyle = '#ffffff';
  ctx.font = `900 44px ${fontFamily()}`;
  ctx.fillText(title.slice(0, 12), 318, 112);
  ctx.fillStyle = 'rgba(255,255,255,0.56)';
  ctx.font = `700 24px ${fontFamily()}`;
  ctx.fillText(artist.slice(0, 20), 320, 170);
  ctx.fillStyle = rgba(accent, active ? 0.92 : 0.56);
  drawRoundRect(ctx, 318, 238, 118, 34, 17);
  ctx.fill();
  ctx.fillStyle = active ? '#08090b' : 'rgba(255,255,255,0.88)';
  ctx.font = `800 18px ${fontFamily()}`;
  ctx.fillText(active ? '播放中' : '歌单', 344, 245);
  return canvas;
}

function makeLyricSunBloomTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const cx = canvas.width * 0.5;
    const cy = canvas.height * 0.5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(2.05, 1);
    const radial = ctx.createRadialGradient(0, 0, 0, 0, 0, canvas.height * 0.43);
    radial.addColorStop(0, 'rgba(255,246,186,0.92)');
    radial.addColorStop(0.18, 'rgba(255,219,126,0.44)');
    radial.addColorStop(0.46, 'rgba(255,186,82,0.15)');
    radial.addColorStop(1, 'rgba(255,186,82,0)');
    ctx.fillStyle = radial;
    ctx.fillRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);
    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.filter = 'blur(34px)';
    ctx.fillStyle = 'rgba(255,235,168,0.18)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, canvas.width * 0.33, canvas.height * 0.14, -0.06, 0, Math.PI * 2);
    ctx.fill();
    ctx.filter = 'blur(58px)';
    ctx.fillStyle = 'rgba(255,214,122,0.11)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, canvas.width * 0.45, canvas.height * 0.19, -0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = 'destination-in';
    const xMask = ctx.createLinearGradient(0, 0, canvas.width, 0);
    xMask.addColorStop(0, 'rgba(255,255,255,0)');
    xMask.addColorStop(0.11, 'rgba(255,255,255,1)');
    xMask.addColorStop(0.89, 'rgba(255,255,255,1)');
    xMask.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = xMask;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const yMask = ctx.createLinearGradient(0, 0, 0, canvas.height);
    yMask.addColorStop(0, 'rgba(255,255,255,0)');
    yMask.addColorStop(0.18, 'rgba(255,255,255,1)');
    yMask.addColorStop(0.82, 'rgba(255,255,255,1)');
    yMask.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = yMask;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  return tex;
}

function makeFallbackCoverCanvas(palette: MineradioPalette, title: string, artist: string, size = 512): HTMLCanvasElement {
  const cv = document.createElement('canvas');
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext('2d');
  if (!ctx) return cv;
  const bg = ctx.createLinearGradient(0, 0, size, size);
  bg.addColorStop(0, palette.deep);
  bg.addColorStop(0.45, palette.mid);
  bg.addColorStop(1, '#050506');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);
  const label = `${title || 'Mineradio'}${artist || ''}`;
  for (let i = 0; i < 900; i += 1) {
    const seed = i * 19.17 + label.length * 7.31;
    const x = seededUnit(seed) * size;
    const y = seededUnit(seed * 1.7) * size;
    const band = seededUnit(seed * 2.3);
    ctx.globalAlpha = 0.12 + seededUnit(seed * 3.4) * 0.34;
    ctx.fillStyle = band > 0.72 ? palette.highlight : band > 0.44 ? palette.secondary : palette.primary;
    ctx.beginPath();
    ctx.arc(x, y, 0.9 + seededUnit(seed * 4.1) * 2.3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  return cv;
}

function makeSquareCoverCanvas(img: HTMLImageElement, size = 512): HTMLCanvasElement {
  const cv = document.createElement('canvas');
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext('2d');
  if (!ctx) return cv;
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  const s = Math.min(iw, ih);
  ctx.clearRect(0, 0, size, size);
  ctx.drawImage(img, (iw - s) / 2, (ih - s) / 2, s, s, 0, 0, size, size);
  return cv;
}

function normalizeCoverResolution(value: number): number {
  return Math.max(0.75, Math.min(1.55, Number.isFinite(value) ? value : COVER_RESOLUTION));
}

export function mineradioCoverParticleGridForResolution(value: number): number {
  let grid = Math.round(118 * normalizeCoverResolution(value));
  grid = Math.max(88, Math.min(183, grid));
  return grid % 2 ? grid : grid + 1;
}

function coverTextureSizeForResolution(value: number): number {
  const resolution = normalizeCoverResolution(value);
  if (resolution >= 1.32) return 512;
  if (resolution >= 1.10) return 384;
  return 256;
}

// Ported from Mineradio's buildEdgeAndDepth: RGBA = depth, edge, fg-mask, luminance.
function buildEdgeAndDepth(srcCanvas: HTMLCanvasElement): HTMLCanvasElement {
  const W = 256;
  const H = 256;
  const N = W * H;
  const normalized = document.createElement('canvas');
  normalized.width = W;
  normalized.height = H;
  const sctx = normalized.getContext('2d');
  if (!sctx) return makeSolidCanvas('rgba(128,0,0,255)', W);
  sctx.drawImage(srcCanvas, 0, 0, W, H);
  const src = sctx.getImageData(0, 0, W, H).data;
  const lum = new Float32Array(N);
  const blur = new Float32Array(N);
  const tmp = new Float32Array(N);

  for (let i = 0; i < N; i += 1) {
    const di = i * 4;
    lum[i] = (src[di] * 0.299 + src[di + 1] * 0.587 + src[di + 2] * 0.114) / 255;
  }

  const blurH = (source: Float32Array, dest: Float32Array, r: number): void => {
    for (let y = 0; y < H; y += 1) {
      let sum = 0;
      for (let x = -r; x <= r; x += 1) sum += source[y * W + Math.max(0, Math.min(W - 1, x))];
      for (let x = 0; x < W; x += 1) {
        dest[y * W + x] = sum / (2 * r + 1);
        const xR = Math.min(W - 1, x + r + 1);
        const xL = Math.max(0, x - r);
        sum += source[y * W + xR] - source[y * W + xL];
      }
    }
  };

  const blurV = (source: Float32Array, dest: Float32Array, r: number): void => {
    for (let x = 0; x < W; x += 1) {
      let sum = 0;
      for (let y = -r; y <= r; y += 1) sum += source[Math.max(0, Math.min(H - 1, y)) * W + x];
      for (let y = 0; y < H; y += 1) {
        dest[y * W + x] = sum / (2 * r + 1);
        const yD = Math.min(H - 1, y + r + 1);
        const yU = Math.max(0, y - r);
        sum += source[yD * W + x] - source[yU * W + x];
      }
    }
  };

  blurH(lum, tmp, 4);
  blurV(tmp, blur, 4);

  const edge = new Float32Array(N);
  for (let y = 1; y < H - 1; y += 1) {
    for (let x = 1; x < W - 1; x += 1) {
      const gx =
        -blur[(y - 1) * W + (x - 1)] - 2 * blur[y * W + (x - 1)] - blur[(y + 1) * W + (x - 1)] +
        blur[(y - 1) * W + (x + 1)] + 2 * blur[y * W + (x + 1)] + blur[(y + 1) * W + (x + 1)];
      const gy =
        -blur[(y - 1) * W + (x - 1)] - 2 * blur[(y - 1) * W + x] - blur[(y - 1) * W + (x + 1)] +
        blur[(y + 1) * W + (x - 1)] + 2 * blur[(y + 1) * W + x] + blur[(y + 1) * W + (x + 1)];
      edge[y * W + x] = Math.min(1, Math.sqrt(gx * gx + gy * gy) * 1.4);
    }
  }

  const depth = new Float32Array(N);
  for (let y = 0; y < H; y += 1) {
    for (let x = 0; x < W; x += 1) {
      const i = y * W + x;
      const cx = (x / (W - 1) - 0.5) * 2;
      const cy = (y / (H - 1) - 0.5) * 2;
      const rr = Math.sqrt(cx * cx + cy * cy);
      const centerBias = 1 - Math.min(1, rr * 0.75);
      depth[i] = Math.min(1, blur[i] * 0.45 + centerBias * 0.55);
    }
  }

  const out = document.createElement('canvas');
  out.width = W;
  out.height = H;
  const octx = out.getContext('2d');
  if (!octx) return out;
  const imgOut = octx.createImageData(W, H);
  for (let i = 0; i < N; i += 1) {
    const d = depth[i];
    const e = edge[i];
    const fg = Math.min(1, d * 0.6 + e * 0.5);
    const di = i * 4;
    imgOut.data[di] = Math.round(d * 255);
    imgOut.data[di + 1] = Math.round(e * 255);
    imgOut.data[di + 2] = Math.round(fg * 255);
    imgOut.data[di + 3] = Math.round(lum[i] * 255);
  }
  octx.putImageData(imgOut, 0, 0);
  return out;
}

function buildCoverParticleGeometry(grid: number): THREE.BufferGeometry {
  const count = grid * grid;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const uvs = new Float32Array(count * 2);
  const rand = new Float32Array(count);
  const texelStep = 1 / grid;
  for (let i = 0; i < count; i += 1) {
    const gx = i % grid;
    const gy = Math.floor(i / grid);
    const u = (gx + 0.5) * texelStep;
    const v = (gy + 0.5) * texelStep;
    const px = gx / (grid - 1);
    const py = gy / (grid - 1);
    positions[i * 3] = (px - 0.5) * PLANE_SIZE;
    positions[i * 3 + 1] = (py - 0.5) * PLANE_SIZE;
    positions[i * 3 + 2] = 0;
    uvs[i * 2] = u;
    uvs[i * 2 + 1] = v;
    rand[i] = seededUnit(i * 11.37 + 3);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aUv', new THREE.BufferAttribute(uvs, 2));
  geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
  return geo;
}

const COVER_VERTEX_SHADER = `
precision highp float;
uniform float uTime, uBass, uMid, uTreble, uBeat, uEnergy, uBurstAmt, uClimax;
uniform float uIntensity, uSpread, uDepth, uPointScale, uSpeed, uTwist, uColorBoost, uCoverRes, uBgFade, uScatter;
uniform float uPreset, uHasCover, uHasDepth, uEdgeEnabled, uAiBoost, uPixel, uColorMixT, uMouseActive, uVinylSpin, uTintStrength;
uniform sampler2D uCoverTex, uPrevCoverTex, uEdgeTex, uRippleTex;
uniform vec2 uMouseXY;
uniform vec3 uTintColor;
uniform int uRippleCount;
attribute vec2 aUv;
attribute float aRand;
varying vec3 vColor;
varying float vBright, vRipple, vEdgeBoost, vAlpha, vSourceLum;

vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289v(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 perm(vec4 x){return mod289v(((x*34.0)+1.0)*x);}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=perm(perm(perm(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=inversesqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
vec2 safeCoverUv(vec2 uv){return clamp(uv, vec2(0.0012), vec2(0.9988));}
vec3 sampleNewCoverColor(vec2 uv){return texture2D(uCoverTex, safeCoverUv(uv)).rgb;}
vec3 samplePrevCoverColor(vec2 uv){return texture2D(uPrevCoverTex, safeCoverUv(uv)).rgb;}
vec4 sampleEdgeColor(vec2 uv){return texture2D(uEdgeTex, safeCoverUv(uv));}
float hash11(float p){return fract(sin(p*127.1)*43758.5453123);}
float rippleSumAt(vec2 p, out float maxAmp) {
  float sum = 0.0; maxAmp = 0.0;
  for (int ri = 0; ri < 12; ri++) {
    if (ri >= uRippleCount) break;
    float vCoord = (float(ri) + 0.5) / 12.0;
    vec4 rd = texture2D(uRippleTex, vec2(0.5, vCoord));
    float age = rd.z; float str = rd.w;
    if (str < 0.005 || age < 0.0 || age > 2.0) continue;
    float dx = p.x - rd.x, dy = p.y - rd.y;
    float dist = sqrt(dx*dx + dy*dy);
    float lifeN = age / 2.0;
    float fadeIn  = smoothstep(0.0, 0.06, age);
    float fadeOut = 1.0 - smoothstep(0.7, 1.0, lifeN);
    float env = fadeIn * fadeOut;
    float bulgeW = 0.55 + age * 0.80;
    float bulge  = exp(-dist*dist / (2.0 * bulgeW * bulgeW)) * (1.0 - smoothstep(0.0, 0.55, lifeN));
    float waveR  = age * 2.10;
    float ringW  = 0.40 + age * 0.22;
    float ring   = exp(-pow((dist - waveR) / ringW, 2.0));
    float local  = (bulge * 2.4 + ring * 1.30) * env * str;
    sum += local;
    maxAmp = max(maxAmp, abs(local));
  }
  return sum;
}
void main(){
  float t = uTime * uSpeed;
  vec2 sampleUv = safeCoverUv(aUv);
  vec3 coverColor = mix(samplePrevCoverColor(sampleUv), sampleNewCoverColor(sampleUv), clamp(uColorMixT, 0.0, 1.0));
  vec4 edge = sampleEdgeColor(sampleUv);
  float depthVal = edge.r;
  float edgeVal = edge.g;
  float fgMask = edge.b;
  float maxRippleAmp = 0.0;
  float rippleZ = 0.0;
  vec3 defaultColor = mix(vec3(0.36, 0.28, 0.72), mix(vec3(0.85, 0.55, 0.95), vec3(0.45, 0.78, 0.95), aUv.x), aUv.y);
  vColor = mix(defaultColor, coverColor, uHasCover);
  vAlpha = 1.0;
  float K = uIntensity * 1.6;
  float spread = clamp(uSpread, 0.0, 1.4);
  vec3 pos = position;
  if (uPreset < 0.5) {
    rippleZ = rippleSumAt(pos.xy, maxRippleAmp);
    float midN = snoise(vec3(pos.x*1.4, pos.y*1.4, t*0.55)) * 0.6
               + snoise(vec3(pos.x*2.8+5.0, pos.y*2.8-3.0, t*0.85)) * 0.4;
    float midMask = 0.55 + 0.45 * snoise(vec3(pos.x*0.4, pos.y*0.4, t*0.18));
    float midDisp = midN * uMid * 0.55 * midMask * K;
    float trebleJ = snoise(vec3(pos.x*6.5, pos.y*6.5, t*3.5 + aRand*4.0)) * uTreble * 0.18 * K;
    float bassBreath = snoise(vec3(pos.x*0.35, pos.y*0.35, t*0.4)) * uBass * 0.42 * K;
    float depthZ = (depthVal - 0.5) * uAiBoost * uDepth * 1.40 * uHasDepth;
    pos.z = (rippleZ * 1.30 + midDisp + trebleJ + bassBreath) * spread + depthZ;
  } else if (uPreset < 1.5) {
    float spin = t * 0.12;
    float angle = aUv.x * 6.2831853 + spin;
    float flow = fract(aUv.y - t * 0.08 * (1.0 + uBass * 0.55));
    float zPos = (flow - 0.5) * 9.0;
    float baseR = 2.0 - uBass * 0.28 * K * spread;
    float ripG = sin(angle * 5.0 + zPos * 1.4 + t * 2.2) * 0.10 * (uMid + uTreble) * K * spread;
    float r = baseR + ripG;
    pos = vec3(cos(angle) * r, sin(angle) * r, zPos);
    sampleUv = safeCoverUv(vec2(aUv.x, flow));
    coverColor = mix(samplePrevCoverColor(sampleUv), sampleNewCoverColor(sampleUv), clamp(uColorMixT, 0.0, 1.0));
    vColor = mix(defaultColor, coverColor, uHasCover) * (0.4 + smoothstep(-4.5, 4.5, zPos) * 0.7);
    maxRippleAmp = max(maxRippleAmp, abs(ripG) * 1.15 + uBass * 0.12);
  } else if (uPreset < 2.5) {
    float theta = aUv.x * 6.2831853;
    float phi = (aUv.y - 0.5) * 3.1415926;
    float baseR = 2.2;
    float trebFlare = snoise(vec3(theta * 1.5, phi * 1.5, t * 0.7)) * uTreble * 0.85 * K * spread;
    float bassExpand = uBass * 0.35 * K * spread;
    float r = baseR * (1.0 + bassExpand) + trebFlare;
    pos.x = r * cos(phi) * cos(theta);
    pos.y = r * sin(phi);
    pos.z = r * cos(phi) * sin(theta);
    float yaw = t * 0.18;
    float cy = cos(yaw), sy = sin(yaw);
    pos.xz = mat2(cy, -sy, sy, cy) * pos.xz;
    maxRippleAmp = max(maxRippleAmp, abs(trebFlare) * 0.22 + bassExpand * 0.26);
  } else if (uPreset < 3.5) {
    pos = vec3((aUv.x - 0.5) * 0.01, (aUv.y - 0.5) * 0.01, -90.0);
    vAlpha = 0.0;
    vColor = vec3(0.0);
    maxRippleAmp = 0.0;
  } else if (uPreset < 4.5) {
    float bassDrive = smoothstep(0.08, 0.78, uBass + uBeat * 0.82);
    float highDrive = smoothstep(0.05, 0.46, uTreble);
    vec2 p = (aUv - 0.5) * 5.12;
    float cs = cos(uVinylSpin), sn = sin(uVinylSpin);
    vec2 rp = mat2(cs, -sn, sn, cs) * p;
    float d = length(p);
    float angle0 = atan(p.y, p.x);
    float recordR = 2.46;
    float coverR = 1.18;
    float recordAlpha = 1.0 - smoothstep(recordR - 0.02, recordR + 0.05, d);
    float coverMask = 1.0 - smoothstep(coverR - 0.012, coverR + 0.018, d);
    float border = exp(-pow((d - coverR) / 0.064, 2.0));
    float outerRim = exp(-pow((d - (recordR - 0.050)) / 0.055, 2.0));
    float vinylN = clamp((d - coverR) / max(0.001, recordR - coverR), 0.0, 1.0);
    pos = vec3(rp * (1.0 + bassDrive * 0.012 + uBeat * 0.026), 0.0);
    vAlpha = recordAlpha;
    if (coverMask > 0.02) {
      vec2 coverUv = p / (coverR * 2.0) + 0.5;
      coverColor = mix(samplePrevCoverColor(coverUv), sampleNewCoverColor(coverUv), clamp(uColorMixT, 0.0, 1.0));
      vColor = mix(defaultColor, coverColor, uHasCover);
      vColor *= 1.02 + 0.10 * (1.0 - smoothstep(0.0, coverR, d));
      vColor = mix(vColor, vec3(1.0), border * 0.54);
      pos.z = 0.040 + border * 0.026 + uBeat * 0.018;
      maxRippleAmp = max(maxRippleAmp, border * 0.30 + bassDrive * 0.075 + uBeat * 0.075);
    } else {
      float groove = 0.5 + 0.5 * sin((d - coverR) * 92.0);
      float fineGroove = 0.5 + 0.5 * sin((d - coverR) * 145.0 + aRand * 3.0);
      float tick = smoothstep(0.82, 0.995, hash11(floor((angle0 + 3.1415926) * 38.0) + floor(d * 72.0) * 2.1));
      vec3 vinyl = vec3(0.052, 0.054, 0.058) + vec3(0.052) * groove + vec3(0.026) * fineGroove;
      vinyl = mix(vinyl, coverColor * 0.32, 0.18 * (1.0 - vinylN));
      float whiteRing = max(border * 0.92, outerRim * 0.26);
      vColor = mix(vinyl, vec3(0.92, 0.94, 0.94), whiteRing);
      vColor = mix(vColor, vec3(1.0), tick * highDrive * (0.06 + border * 0.12));
      pos.z = groove * 0.010 + border * 0.024 + bassDrive * vinylN * 0.016 * K + tick * highDrive * 0.010;
      maxRippleAmp = max(maxRippleAmp, border * 0.32 + outerRim * 0.12 + bassDrive * vinylN * 0.11 + tick * highDrive * 0.10 + uBeat * vinylN * 0.08);
    }
  } else {
    float bassGlow = smoothstep(0.07, 0.78, uBass) * 0.34 + uBeat * 0.014;
    float midGlow = smoothstep(0.07, 0.62, uMid) * 0.42;
    float highGlow = smoothstep(0.04, 0.46, uTreble) * 0.46;
    float lane = aUv.y;
    float transition = clamp(uBurstAmt, 0.0, 1.0);
    if (lane < 0.80) {
      float laneWarp = snoise(vec3(aUv.x * 0.42, lane * 1.7, t * 0.026)) * 0.11 + (hash11(aRand * 73.1) - 0.5) * 0.045;
      float warpedLane = clamp(lane + laneWarp, 0.0, 0.80);
      float bandCoord = warpedLane / 0.80 * 5.65 + snoise(vec3(aUv.x * 0.82, lane * 2.25, t * 0.032)) * 0.62;
      float band = floor(bandCoord);
      float local = fract(bandCoord + hash11(band * 9.13 + aRand * 2.4) * 0.18);
      float bandN = clamp((band + 0.5) / 5.65, 0.0, 1.0);
      float seed = hash11(band * 19.17 + aRand * 31.0);
      float flow = fract(aUv.x + t * (0.0034 + bandN * 0.0038 + seed * 0.0022) + seed * 0.53);
      float arc = (flow - 0.5) * 3.1415926 * (1.35 + bandN * 0.72 + seed * 0.24);
      float armCurve = sin(arc + bandN * 2.2 + seed * 5.3);
      float spiralRadius = 9.2 + bandN * 11.8 + seed * 6.0 + local * 2.9;
      float x = cos(arc * 0.72 + bandN * 0.92 + seed * 1.3) * spiralRadius + (flow - 0.5) * (13.5 + bandN * 9.5);
      float ribbonPhase = flow * 6.2831853 * (0.55 + bandN * 0.24 + seed * 0.10) + t * (0.010 + bandN * 0.007) + seed * 5.7;
      float broadWave = sin(ribbonPhase) * 0.92;
      float ridgeCenter = 0.43 + (seed - 0.5) * 0.18;
      float ridge = exp(-pow((local - ridgeCenter) / (0.25 + seed * 0.04), 2.0));
      float softMask = smoothstep(0.010, 0.12, lane) * (1.0 - smoothstep(0.72, 0.81, lane));
      float ribbonNoise = snoise(vec3(flow * 1.18 + seed, bandN * 2.0, t * 0.018)) * 0.74;
      pos.x = x + ribbonNoise * 1.40 + sin(t * 0.012 + seed * 8.0) * 0.22;
      pos.y = (bandN - 0.5) * 13.2 + armCurve * (2.3 + bandN * 1.6) + (seed - 0.5) * 1.85 + broadWave + (local - 0.5) * (0.58 + ridge * 0.14);
      pos.z = mix(-23.5, 15.5, bandN) + (seed - 0.5) * 6.0 + broadWave * 1.35 + ribbonNoise * 1.85;
      float pulseLine = 0.5 + 0.5 * sin(ribbonPhase * (1.7 + seed * 0.9) - t * 0.32 + seed * 6.0);
      vec3 aurora = mix(vec3(0.52, 0.86, 1.0), vec3(0.70, 0.58, 1.0), bandN);
      vAlpha = (0.18 + ridge * 0.78 + pulseLine * highGlow * 0.035 + bassGlow * 0.025) * softMask * (0.96 + transition * 0.02);
      vColor = mix(coverColor, aurora, 0.62 + ridge * 0.22) * (0.76 + ridge * 0.86 + pulseLine * highGlow * 0.05 + bassGlow * 0.04);
      maxRippleAmp = max(maxRippleAmp, ridge * (0.12 + midGlow * 0.05) + pulseLine * highGlow * 0.045 + bassGlow * 0.030);
    } else {
      float q = (lane - 0.80) / 0.20;
      float seed = hash11(aRand * 917.0 + floor(q * 130.0));
      float drift = fract(aUv.x + t * (0.0014 + seed * 0.0048) + seed * 0.63);
      float cluster = snoise(vec3(seed * 2.0, q * 3.2, t * 0.007));
      pos = vec3((drift - 0.5) * (45.0 + seed * 22.0) + cluster * 3.4, (hash11(aRand * 331.0 + seed * 5.0) - 0.5) * 22.0, mix(-32.0, 18.0, seed));
      float twinkle = pow(0.5 + 0.5 * sin(t * (0.24 + seed * 0.42) + aRand * 17.0), 5.0);
      float dust = smoothstep(0.22, 0.98, hash11(aRand * 661.0 + floor(q * 160.0)));
      vAlpha = dust * (0.16 + twinkle * 0.46 + highGlow * 0.025 + bassGlow * 0.018) * (1.0 - q * 0.06);
      vColor = mix(coverColor, vec3(0.92, 0.97, 1.0), 0.62 + twinkle * 0.14) * (0.72 + twinkle * 0.62 + bassGlow * 0.025);
      maxRippleAmp = max(maxRippleAmp, twinkle * highGlow * 0.055 + dust * bassGlow * 0.030);
    }
  }

  if (uMouseActive > 0.5 && uPreset < 0.5) {
    float mdx = pos.x - uMouseXY.x;
    float mdy = pos.y - uMouseXY.y;
    float md = sqrt(mdx * mdx + mdy * mdy);
    if (md < 1.0) {
      float push = (1.0 - md) * (1.0 - md);
      pos.z += push * 0.55 * spread;
    }
  }
  if (uScatter > 0.001) {
    vec2 jdir = vec2(cos(aRand * 6.2831), sin(aRand * 6.2831));
    pos.xy += jdir * uScatter * (0.05 + uTreble * 0.10);
  }
  if (uTwist > 0.001 && uPreset < 0.5) {
    float ta = uTwist * pos.z * 0.6;
    float cs = cos(ta), sn = sin(ta);
    pos.xy = mat2(cs, -sn, sn, cs) * pos.xy;
  }

  float vinylHiResGuard = smoothstep(1.08, 1.55, uCoverRes) * step(3.5, uPreset) * (1.0 - step(4.5, uPreset));
  float edgeBoost = uEdgeEnabled * edgeVal * mix(1.0, 0.42, vinylHiResGuard);
  vSourceLum = dot(max(vColor, vec3(0.0)), vec3(0.299, 0.587, 0.114));
  float blackParticleGuard = 1.0 - smoothstep(0.025, 0.115, vSourceLum);
  vEdgeBoost = edgeBoost * (uPreset > 3.5 ? 0.22 : 1.0) * (1.0 - blackParticleGuard);
  vec3 darkLiftColor = mix(defaultColor * 0.72 + vec3(0.08), vec3(0.76, 0.92, 1.0), edgeVal * 0.24 + uClimax * 0.10);
  vColor = mix(vColor, darkLiftColor, blackParticleGuard * (0.44 + uClimax * 0.18));
  vColor = pow(max(vColor, vec3(0.0)), vec3(1.0 / max(0.35, uColorBoost)));
  float edgeColorMix = edgeBoost * (uPreset > 3.5 ? 0.20 : 0.50) * (1.0 - blackParticleGuard);
  vColor = mix(vColor, vColor + vec3(0.20), edgeColorMix);
  float tintLum = max(max(vColor.r, vColor.g), vColor.b);
  vec3 tintedColor = uTintColor * max(0.24, tintLum * 1.12);
  vColor = mix(vColor, tintedColor, clamp(uTintStrength, 0.0, 1.0) * (1.0 - blackParticleGuard));
  vBright = 0.82 + maxRippleAmp * 0.55 * spread + uBass * 0.10 + edgeBoost * 0.30 + uEnergy * 0.05 + uBurstAmt * 0.40 * spread;
  if (uPreset > 4.5) {
    vBright = 0.94 + maxRippleAmp * 0.34 + uBass * 0.020 + uEnergy * 0.026 + uBurstAmt * 0.025;
  } else if (uPreset > 3.5) {
    vBright = 0.94 + maxRippleAmp * 0.64 + uBass * 0.08 + edgeBoost * 0.12 + uEnergy * 0.05 + uBeat * 0.16 + uBurstAmt * 0.16;
  }
  vRipple = clamp(maxRippleAmp * 1.5 * spread, 0.0, 1.0);
  if (uHasDepth > 0.5 && uPreset < 0.5) {
    float bgMul = mix(1.0, 0.55, uBgFade * (1.0 - fgMask));
    vBright *= bgMul;
  }
  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  float depthSize = 36.0 / max(0.5, -mvPos.z);
  float audioBoost = 1.0 + maxRippleAmp * 0.70 * spread + edgeBoost * 0.55 + uBeat * 0.30 + uBurstAmt * 0.50 * spread;
  float sz = clamp(depthSize * audioBoost, 1.05, 4.95);
  if (uPreset > 4.5) {
    float flowDrive = uBass * 0.070 + uMid * 0.046 + uTreble * 0.060 + uBurstAmt * 0.090 + uBeat * 0.055;
    sz = clamp(depthSize * (1.05 + flowDrive), 1.00, 5.45);
  } else if (uPreset > 3.5) {
    float ringDrive = uBass * 0.30 + uMid * 0.18 + uTreble * 0.22 + uBeat * 0.30;
    sz = clamp(depthSize * (0.90 + ringDrive * 0.62), 1.05, 3.90);
  }
  gl_PointSize = sz * uPixel * uPointScale;
  gl_Position = projectionMatrix * mvPos;
}
`;

const COVER_FRAGMENT_SHADER = `
precision highp float;
uniform sampler2D uDotTex;
uniform float uAlpha, uParticleDim;
varying vec3 vColor;
varying float vBright, vRipple, vEdgeBoost, vAlpha, vSourceLum;
void main(){
  vec4 tex = texture2D(uDotTex, gl_PointCoord);
  if (tex.a < 0.02) discard;
  vec3 col = vColor * vBright;
  col = mix(col, col * 1.3 + vec3(0.05), vEdgeBoost * 0.35);
  col = mix(col, col * 1.2, vRipple * 0.4);
  float keepBlack = 1.0 - smoothstep(0.025, 0.115, vSourceLum);
  float nonBlack = 1.0 - keepBlack;
  float dotDist = length(gl_PointCoord - vec2(0.5)) * 2.0;
  float readableRim = smoothstep(0.44, 0.94, dotDist) * (1.0 - smoothstep(0.94, 1.08, dotDist)) * tex.a;
  float outLum = dot(col, vec3(0.299, 0.587, 0.114));
  float lightParticle = smoothstep(0.50, 0.82, outLum) * nonBlack;
  float darkParticle = (1.0 - smoothstep(0.20, 0.50, outLum)) * nonBlack;
  col = mix(col, vec3(0.0), readableRim * lightParticle * 0.38);
  col = mix(col, vec3(1.0), readableRim * darkParticle * 0.20);
  col = clamp(col, vec3(0.0), vec3(1.6));
  gl_FragColor = vec4(col, tex.a * uAlpha * uParticleDim * vAlpha);
}
`;

const BLOOM_FRAGMENT_SHADER = `
precision highp float;
uniform sampler2D uDotTex;
uniform float uAlpha, uBloomStrength, uParticleDim;
varying vec3 vColor;
varying float vBright, vRipple, vEdgeBoost, vAlpha, vSourceLum;
void main(){
  vec4 tex = texture2D(uDotTex, gl_PointCoord);
  if (tex.a < 0.01) discard;
  float soft = tex.a * tex.a;
  vec3 col = vColor * (0.55 + vBright * 0.62);
  col = mix(col, col + vec3(0.22, 0.18, 0.10), vEdgeBoost * 0.35);
  col = clamp(col, vec3(0.0), vec3(1.8));
  float pulse = 1.0 + vRipple * 0.65;
  float keepBlack = 1.0 - smoothstep(0.025, 0.115, vSourceLum);
  float bloomKeep = 1.0 - keepBlack * 0.92;
  gl_FragColor = vec4(col, soft * uAlpha * uBloomStrength * uParticleDim * pulse * 0.55 * vAlpha * bloomKeep);
}
`;

export class MineradioPlugin implements DancePlugin {
  config: DancePluginConfig = {
    id: 'mineradio',
    name: 'Mineradio',
    description: '移植 Mineradio 舞台歌词主效果：Three 点云封面、悬浮歌词与拖拽视角',
    author: 'DancingMusic',
    version: '1.0.1',
    category: 'particle',
    price: 0,
    thumbnail: thumbnailUrl,
    hostOverlay: {
      showSongCover: false,
      showSongMetadata: false,
    },
    rendering: {
      context: 'webgl',
    },
    settingSections: MINERADIO_SETTING_SECTIONS,
    settings: MINERADIO_SETTINGS_SCHEMA,
  };

  private canvas: HTMLCanvasElement | null = null;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private stageGroup: THREE.Group | null = null;
  private coverGroup: THREE.Group | null = null;
  private particles: THREE.Points | null = null;
  private bloomParticles: THREE.Points | null = null;
  private coverGeometry: THREE.BufferGeometry | null = null;
  private coverGrid = 0;
  private coverTextureSize = coverTextureSizeForResolution(MINERADIO_DEFAULT_SETTINGS.coverResolution);
  private uniforms: Record<string, { value: any }> | null = null;
  private dotTexture: THREE.Texture | null = null;
  private coverTexture: THREE.Texture | null = null;
  private previousCoverTexture: THREE.Texture | null = null;
  private edgeTexture: THREE.Texture | null = null;
  private rippleTexture: THREE.DataTexture | null = null;
  private rippleData: Float32Array | null = null;
  private ripples: MineradioRipple[] = [];
  private rippleIdx = 0;
  private lastRippleAt = -10;
  private lastSectionRippleAt = -10;
  private lastBassRising = false;
  private readonly rippleRegions = Array.from({ length: 9 }, (_, index) => {
    const rx = index % 3;
    const ry = Math.floor(index / 3);
    return {
      x: (rx / 2 - 0.5) * PLANE_SIZE * 0.72,
      y: (ry / 2 - 0.5) * PLANE_SIZE * 0.72,
    };
  });
  private lyricMesh: THREE.Mesh | null = null;
  private lyricShadow: THREE.Mesh | null = null;
  private lyricGlow: THREE.Mesh | null = null;
  private lyricSun: THREE.Mesh | null = null;
  private lyricSparks: THREE.Points | null = null;
  private lyricStarRiver: THREE.Points | null = null;
  private lyricTexture: THREE.CanvasTexture | null = null;
  private lyricShadowTexture: THREE.CanvasTexture | null = null;
  private lyricGlowTexture: THREE.CanvasTexture | null = null;
  private lyricSunTexture: THREE.CanvasTexture | null = null;
  private lyricSparkBasePositions: Float32Array | null = null;
  private lyricStarRiverSize = { width: 4.2, height: 0.58 };
  private lyricTextureKey = '';
  private shelfGroup: THREE.Group | null = null;
  private shelfCards: MineradioShelfCard[] = [];
  private shelfAllItems: PlaylistSongInfo[] = [];
  private shelfGeometry: THREE.PlaneGeometry | null = null;
  private shelfTextureKey = '';
  private shelfItemsKey = '';
  private shelfRenderedStart = -1;
  private shelfCenterTarget = 0;
  private shelfCenterSmooth = 0;
  private shelfLastWheelAt = 0;
  private shelfCoverCache = new Map<string, { img?: HTMLImageElement; loaded: boolean; failed: boolean; loading: boolean }>();
  private width = 0;
  private height = 0;
  private elapsed = 0;
  private currentTime = 0;
  private songInfo: SongInfo = { title: '', artist: '' };
  private playlist: PlaylistSongInfo[] = [];
  private playlistCollections: PlaylistCollectionInfo[] = [];
  private hostActions: DanceHostActions | null = null;
  private currentIndex = 0;
  private previousPreset = MINERADIO_DEFAULT_SETTINGS.preset;
  private lyrics: StageLyricLine[] = [];
  private activeLyricIndex = -99;
  private currentText = '';
  private currentProgress = 0;
  private lineAge = 0;
  private palette: MineradioPalette = getMineradioPalette();
  private beatGlow = 0;
  private sunEnergy = 0;
  private lastBeatAt = -10;
  private smoothBass = 0;
  private smoothMid = 0;
  private smoothTreble = 0;
  private smoothEnergy = 0;
  private beatPulse = 0;
  private sectionClimax = 0;
  private sectionDynamics = 0;
  private sectionBloom = 0;
  private stageShaderClimax = 0;
  private cameraPunch = 0;
  private cameraThetaKick = 0;
  private cameraPhiKick = 0;
  private cameraRadiusKick = 0;
  private cameraRollKick = 0;
  private cameraDynamicsScale = 0.82;
  private lastCameraBeatAt = -10;
  private gestureRotation = { x: 0, y: 0 };
  private rotationReturn = { active: false, velocityX: 0, velocityY: 0 };
  private readonly lyricCoverLocalPosition = new THREE.Vector3();
  private readonly lyricCoverWorldPosition = new THREE.Vector3();
  private readonly lyricStagePosition = new THREE.Vector3();
  private readonly lyricCoverWorldQuaternion = new THREE.Quaternion();
  private readonly lyricTiltQuaternion = new THREE.Quaternion();
  private particleSpin = { vx: 0, vy: 0, damping: 0.90 };
  private mouseWorld = new THREE.Vector3(-999, -999, 0);
  private mouseActive = false;
  private particlePointerRay = new THREE.Raycaster();
  private particlePointerNdc = new THREE.Vector2();
  private shelfActionRay = new THREE.Raycaster();
  private shelfActionNdc = new THREE.Vector2();
  private particlePointerPlane = new THREE.Plane();
  private particlePointerPlanePoint = new THREE.Vector3();
  private particlePointerPlaneNormal = new THREE.Vector3();
  private particlePointerWorldHit = new THREE.Vector3();
  private particlePointerLocalHit = new THREE.Vector3();
  private particlePointerQuat = new THREE.Quaternion();
  private particlePointerFrame = { dirty: false, clientX: 0, clientY: 0, ndcX: 0, ndcY: 0 };
  private pointerId: number | null = null;
  private isDraggingView = false;
  private lastPointerX = 0;
  private lastPointerY = 0;
  private lastPointerAt = 0;
  private pendingDrag = { dirty: false, dx: 0, dy: 0, elapsed: 0 };
  private pointerDownAt = { x: 0, y: 0, hadDrag: false };
  private lastClickAt = 0;
  private lastClickPoint = { x: 0, y: 0 };
  private settings: MineradioPluginSettings = { ...MINERADIO_DEFAULT_SETTINGS };

  init(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.width = canvas.width || canvas.offsetWidth || 800;
    this.height = canvas.height || canvas.offsetHeight || 600;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, Math.max(1, this.width) / Math.max(1, this.height), 0.1, 100);
    this.camera.position.set(0, 0, 6.6);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatioForQuality(this.settings.performanceQuality)));
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.setSize(this.width, this.height, false);

    this.stageGroup = new THREE.Group();
    this.coverGroup = new THREE.Group();
    this.coverGroup.position.set(-0.22, 0.1, 0);
    this.coverGroup.scale.setScalar(1.28);
    this.stageGroup.add(this.coverGroup);
    this.scene.add(this.stageGroup);

    this.setupCoverParticles();
    this.setupLyricMeshes();
    this.setupShelf();
    this.installPointerHandlers();
    this.rebuildSongState();
  }

  resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    if (this.camera) {
      this.camera.aspect = Math.max(1, width) / Math.max(1, height);
      this.camera.updateProjectionMatrix();
    }
    this.renderer?.setSize(width, height, false);
  }

  updateSettings(settings: Record<string, any>): void {
    this.settings = normalizeMineradioSettings(settings, this.settings);
    if (settings.currentSong) {
      const next = settings.currentSong as SongInfo;
      const changed =
        next.title !== this.songInfo.title ||
        next.artist !== this.songInfo.artist ||
        next.cover !== this.songInfo.cover ||
        next.lyrics !== this.songInfo.lyrics;
      this.songInfo = {
        title: next.title || '',
        artist: next.artist || '',
        cover: next.cover,
        lyrics: next.lyrics,
      };
      if (changed) this.rebuildSongState();
    }
    if (typeof settings.currentTime === 'number') this.currentTime = settings.currentTime;
    if (settings.hostActions && typeof settings.hostActions === 'object') {
      this.hostActions = settings.hostActions as DanceHostActions;
    }
    if (Array.isArray(settings.playlist)) {
      this.playlist = settings.playlist
        .filter((song): song is PlaylistSongInfo => Boolean(song && typeof song === 'object'))
        .slice(0, 36)
        .map((song, index) => ({
          shelfType: 'queue',
          title: String(song.title || ''),
          artist: String(song.artist || ''),
          cover: typeof song.cover === 'string' ? song.cover : undefined,
          lyrics: Array.isArray(song.lyrics) ? song.lyrics : undefined,
          url: typeof song.url === 'string' ? song.url : undefined,
          queueIndex: index,
        }));
    }
    if (Array.isArray(settings.playlistCollections)) {
      this.playlistCollections = settings.playlistCollections
        .filter((item): item is PlaylistCollectionInfo => Boolean(item && typeof item === 'object'))
        .slice(0, 36)
        .map(item => ({
          id: String(item.id || ''),
          title: String(item.title || ''),
          subtitle: typeof item.subtitle === 'string' ? item.subtitle : undefined,
          cover: typeof item.cover === 'string' ? item.cover : undefined,
          tag: typeof item.tag === 'string' ? item.tag : undefined,
          source: typeof item.source === 'string' ? item.source : undefined,
          trackCount: typeof item.trackCount === 'number' ? item.trackCount : undefined,
        }))
        .filter(item => item.id && item.title);
    }
    if (typeof settings.currentIndex === 'number') {
      this.currentIndex = Math.max(0, Math.min(Math.max(0, this.playlist.length - 1), Math.floor(settings.currentIndex)));
    }
  }

  render(audioData: AudioData, deltaTime: number, isPlaying: boolean): void {
    if (!this.renderer || !this.scene || !this.camera || !this.uniforms) return;
    const dt = Math.min(0.05, Math.max(0, deltaTime || 0));
    this.elapsed += dt * (isPlaying ? 1 : 0.38);
    this.lineAge += dt;
    this.updateLyricState();
    this.updateMotion(audioData, dt, isPlaying);
    this.flushPointerDragFrame();
    this.tickGestureRotation(dt);
    this.updateParticlePointerFrame();
    this.updateUniforms(audioData, isPlaying, dt);
    this.updateRipples(dt, isPlaying);
    this.updateStageTransform(dt);
    this.updateLyricTexture();
    this.updateLyricEffects(audioData, dt, isPlaying);
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.removePointerHandlers();
    this.lyricTexture?.dispose();
    this.lyricShadowTexture?.dispose();
    this.lyricGlowTexture?.dispose();
    this.lyricSunTexture?.dispose();
    this.coverTexture?.dispose();
    this.previousCoverTexture?.dispose();
    this.edgeTexture?.dispose();
    this.rippleTexture?.dispose();
    this.dotTexture?.dispose();
    this.coverGeometry?.dispose();
    (this.particles?.material as THREE.Material | undefined)?.dispose();
    (this.bloomParticles?.material as THREE.Material | undefined)?.dispose();
    (this.lyricMesh?.geometry as THREE.BufferGeometry | undefined)?.dispose();
    (this.lyricMesh?.material as THREE.Material | undefined)?.dispose();
    (this.lyricShadow?.geometry as THREE.BufferGeometry | undefined)?.dispose();
    (this.lyricShadow?.material as THREE.Material | undefined)?.dispose();
    (this.lyricGlow?.geometry as THREE.BufferGeometry | undefined)?.dispose();
    (this.lyricGlow?.material as THREE.Material | undefined)?.dispose();
    (this.lyricSun?.geometry as THREE.BufferGeometry | undefined)?.dispose();
    (this.lyricSun?.material as THREE.Material | undefined)?.dispose();
    (this.lyricSparks?.geometry as THREE.BufferGeometry | undefined)?.dispose();
    (this.lyricSparks?.material as THREE.Material | undefined)?.dispose();
    (this.lyricStarRiver?.geometry as THREE.BufferGeometry | undefined)?.dispose();
    (this.lyricStarRiver?.material as THREE.Material | undefined)?.dispose();
    this.disposeShelfCards();
    this.shelfGeometry?.dispose();
    this.shelfCoverCache.clear();
    this.renderer?.dispose();
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.canvas = null;
  }

  private setupCoverParticles(): void {
    if (!this.coverGroup || !this.renderer) return;
    this.dotTexture = makeDotTexture();
    this.coverTexture = new THREE.CanvasTexture(makeSolidCanvas('#1c1c28'));
    this.previousCoverTexture = new THREE.CanvasTexture(makeSolidCanvas('#1c1c28'));
    this.edgeTexture = new THREE.CanvasTexture(makeSolidCanvas('rgba(128,0,0,255)'));
    for (const tex of [this.coverTexture, this.previousCoverTexture, this.edgeTexture]) {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
    }
    this.rippleData = new Float32Array(RIPPLE_MAX * 4);
    this.ripples = Array.from({ length: RIPPLE_MAX }, () => ({ x: 0, y: 0, age: -10, str: 0 }));
    this.rippleTexture = new THREE.DataTexture(this.rippleData, 1, RIPPLE_MAX, THREE.RGBAFormat, THREE.FloatType);
    this.rippleTexture.magFilter = THREE.NearestFilter;
    this.rippleTexture.minFilter = THREE.NearestFilter;
    this.rippleTexture.needsUpdate = true;

    this.uniforms = {
      uTime: { value: 0 },
      uBass: { value: 0 },
      uMid: { value: 0 },
      uTreble: { value: 0 },
      uBeat: { value: 0 },
      uEnergy: { value: 0 },
      uBurstAmt: { value: 0.18 },
      uClimax: { value: 0 },
      uPreset: { value: visualPresetIndex(MINERADIO_DEFAULT_SETTINGS.preset) },
      uIntensity: { value: MINERADIO_DEFAULT_SETTINGS.intensity },
      uSpread: { value: MINERADIO_DEFAULT_SETTINGS.coverSpread },
      uDepth: { value: MINERADIO_DEFAULT_SETTINGS.depth },
      uPointScale: { value: MINERADIO_DEFAULT_SETTINGS.pointScale },
      uSpeed: { value: 1.0 },
      uTwist: { value: MINERADIO_DEFAULT_SETTINGS.twist },
      uColorBoost: { value: MINERADIO_DEFAULT_SETTINGS.colorBoost },
      uCoverRes: { value: MINERADIO_DEFAULT_SETTINGS.coverResolution },
      uBgFade: { value: MINERADIO_DEFAULT_SETTINGS.bgFade },
      uBloomStrength: { value: MINERADIO_DEFAULT_SETTINGS.bloom ? MINERADIO_DEFAULT_SETTINGS.bloomStrength : 0 },
      uBloomSize: { value: 2.65 },
      uScatter: { value: MINERADIO_DEFAULT_SETTINGS.scatter },
      uCoverTex: { value: this.coverTexture },
      uPrevCoverTex: { value: this.previousCoverTexture },
      uColorMixT: { value: 1.0 },
      uVinylSpin: { value: 0 },
      uTintColor: { value: new THREE.Color(0.62, 0.72, 0.82) },
      uTintStrength: { value: 0 },
      uEdgeTex: { value: this.edgeTexture },
      uRippleTex: { value: this.rippleTexture },
      uRippleCount: { value: 0 },
      uDotTex: { value: this.dotTexture },
      uMouseXY: { value: new THREE.Vector2(-999, -999) },
      uMouseActive: { value: 0 },
      uHasCover: { value: 0 },
      uHasDepth: { value: 0 },
      uEdgeEnabled: { value: MINERADIO_DEFAULT_SETTINGS.edge ? 1 : 0 },
      uAiBoost: { value: 0.55 },
      uPixel: { value: this.renderer.getPixelRatio() },
      uAlpha: { value: 0 },
      uParticleDim: { value: 1 },
    };

    this.coverGrid = mineradioCoverParticleGridForResolution(MINERADIO_DEFAULT_SETTINGS.coverResolution);
    this.coverGeometry = buildCoverParticleGeometry(this.coverGrid);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: COVER_VERTEX_SHADER,
      fragmentShader: COVER_FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    const bloomMaterial = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: COVER_VERTEX_SHADER.replace(
        'uniform float uPreset, uHasCover, uHasDepth, uEdgeEnabled, uAiBoost, uPixel, uColorMixT, uMouseActive, uVinylSpin, uTintStrength;',
        'uniform float uPreset, uHasCover, uHasDepth, uEdgeEnabled, uAiBoost, uPixel, uColorMixT, uMouseActive, uVinylSpin, uTintStrength, uBloomSize;',
      ).replace(
        'gl_PointSize = sz * uPixel * uPointScale;',
        'gl_PointSize = sz * uPixel * uPointScale * uBloomSize;',
      ),
      fragmentShader: BLOOM_FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    this.bloomParticles = new THREE.Points(this.coverGeometry, bloomMaterial);
    this.bloomParticles.frustumCulled = false;
    this.bloomParticles.renderOrder = 0;
    this.bloomParticles.visible = MINERADIO_DEFAULT_SETTINGS.bloom;
    this.particles = new THREE.Points(this.coverGeometry, material);
    this.particles.frustumCulled = false;
    this.particles.renderOrder = 1;
    this.coverGroup.add(this.bloomParticles);
    this.coverGroup.add(this.particles);
  }

  private setupLyricMeshes(): void {
    if (!this.stageGroup) return;
    const geometry = new THREE.PlaneGeometry(6.4, 1.25, 1, 1);
    const blank = makeSolidCanvas('rgba(0,0,0,0)', 16);
    this.lyricTexture = new THREE.CanvasTexture(blank);
    this.lyricShadowTexture = new THREE.CanvasTexture(blank);
    this.lyricGlowTexture = new THREE.CanvasTexture(blank);
    this.lyricSunTexture = makeLyricSunBloomTexture();
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: this.lyricSunTexture,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      opacity: 0,
      side: THREE.DoubleSide,
      color: colorToVector(this.palette.highlight, '#fff2b8', 0.36),
    });
    const glowMaterial = new THREE.MeshBasicMaterial({
      map: this.lyricGlowTexture,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.84,
    });
    const shadowMaterial = new THREE.MeshBasicMaterial({
      map: this.lyricShadowTexture,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      opacity: 0.72,
      side: THREE.DoubleSide,
    });
    const textMaterial = new THREE.MeshBasicMaterial({
      map: this.lyricTexture,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      side: THREE.DoubleSide,
    });
    this.lyricSun = new THREE.Mesh(new THREE.PlaneGeometry(6.3, 1.55, 1, 1), sunMaterial);
    this.lyricSun.renderOrder = 39;
    this.lyricSun.position.set(0.03, -0.03, 1.26);
    this.lyricGlow = new THREE.Mesh(geometry.clone(), glowMaterial);
    this.lyricGlow.renderOrder = 40;
    this.lyricGlow.position.set(0.03, -0.05, 1.32);
    this.lyricGlow.scale.set(1.08, 1.08, 1);
    this.lyricShadow = new THREE.Mesh(geometry.clone(), shadowMaterial);
    this.lyricShadow.renderOrder = 42;
    this.lyricShadow.position.set(0.03, -0.05, 1.34);
    this.lyricShadow.scale.set(1.02, 1.08, 1);
    this.lyricMesh = new THREE.Mesh(geometry, textMaterial);
    this.lyricMesh.renderOrder = 43;
    this.lyricMesh.position.set(0.03, -0.05, 1.38);
    this.stageGroup.add(this.lyricSun);
    this.stageGroup.add(this.lyricGlow);
    this.stageGroup.add(this.lyricShadow);
    this.stageGroup.add(this.lyricMesh);
    this.createLyricStarRiver();
    this.createLyricSparks();
  }

  private createLyricStarRiver(): void {
    if (!this.stageGroup || !this.dotTexture || !this.uniforms) return;
    const geometry = new THREE.BufferGeometry();
    const seeds = new Float32Array(LYRIC_STAR_RIVER_COUNT);
    const lanes = new Float32Array(LYRIC_STAR_RIVER_COUNT);
    const depths = new Float32Array(LYRIC_STAR_RIVER_COUNT);
    for (let i = 0; i < LYRIC_STAR_RIVER_COUNT; i += 1) {
      seeds[i] = seededUnit(i * 17.17 + 3.9) * 1000;
      lanes[i] = seededUnit(i * 23.73 + 6.1);
      depths[i] = seededUnit(i * 31.41 + 9.7);
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(LYRIC_STAR_RIVER_COUNT * 3), 3));
    geometry.setAttribute('seed', new THREE.BufferAttribute(seeds, 1));
    geometry.setAttribute('lane', new THREE.BufferAttribute(lanes, 1));
    geometry.setAttribute('depthSeed', new THREE.BufferAttribute(depths, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: this.dotTexture },
        uTime: this.uniforms.uTime,
        uPixel: this.uniforms.uPixel,
        uBass: this.uniforms.uBass,
        uBeat: this.uniforms.uBeat,
        uWidth: { value: this.lyricStarRiverSize.width },
        uHeight: { value: this.lyricStarRiverSize.height },
        uOpacity: { value: 0 },
        uColorA: { value: colorToVector(this.palette.secondary, '#9cffdf', 0.42) },
        uColorB: { value: colorToVector(this.palette.highlight, '#fff7d2', 0.44) },
      },
      vertexShader: [
        'precision highp float;',
        'attribute float seed,lane,depthSeed;',
        'uniform float uTime,uPixel,uBass,uBeat,uWidth,uHeight;',
        'varying float vSeed,vLane,vGlow;',
        'float hash(float n){return fract(sin(n)*43758.5453123);}',
        'void main(){',
        '  float laneBand = floor(lane * 5.0);',
        '  float laneLocal = fract(lane * 5.0);',
        '  float speed = 0.030 + hash(seed * 1.71) * 0.055 + laneBand * 0.005;',
        '  float flow = fract(hash(seed * 2.13) + uTime * speed);',
        '  float x = (flow - 0.5) * uWidth * (1.08 + hash(seed * 5.1) * 0.18);',
        '  float curve = sin(flow * 6.2831853 * (0.92 + hash(seed * 4.0) * 0.46) + seed * 0.071 + uTime * 0.34);',
        '  float breath = sin(uTime * (0.42 + hash(seed * 6.9) * 0.42) + seed * 0.093);',
        '  float y = (laneBand - 2.0) * uHeight * 0.135 + curve * uHeight * (0.20 + hash(seed * 9.0) * 0.18) + (laneLocal - 0.5) * uHeight * 0.16 + breath * uHeight * 0.10;',
        '  float z = -0.08 + (depthSeed - 0.5) * 0.44 + sin(uTime * (0.18 + hash(seed) * 0.24) + seed) * 0.08;',
        '  vec3 pos = vec3(x, y, z);',
        '  float edge = smoothstep(0.0, 0.18, flow) * (1.0 - smoothstep(0.82, 1.0, flow));',
        '  vSeed = seed;',
        '  vLane = lane;',
        '  vGlow = edge * (0.62 + 0.38 * sin(uTime * (0.9 + hash(seed * 8.0) * 0.7) + seed));',
        '  vec4 mv = modelViewMatrix * vec4(pos, 1.0);',
        '  float dist = max(0.45, -mv.z);',
        '  float size = (0.030 + hash(seed * 12.0) * 0.040 + vGlow * 0.024 + uBeat * 0.010) * (1.0 + uBass * 0.18);',
        '  gl_PointSize = clamp(size * uPixel * 120.0 / dist, 1.0, 7.2);',
        '  gl_Position = projectionMatrix * mv;',
        '}',
      ].join('\n'),
      fragmentShader: [
        'precision highp float;',
        'uniform sampler2D uMap;',
        'uniform vec3 uColorA,uColorB;',
        'uniform float uOpacity,uTime,uBeat;',
        'varying float vSeed,vLane,vGlow;',
        'void main(){',
        '  vec4 tex = texture2D(uMap, gl_PointCoord);',
        '  if(tex.a < 0.02) discard;',
        '  float tw = pow(0.5 + 0.5 * sin(uTime * (0.55 + fract(vSeed) * 0.35) + vSeed), 4.0);',
        '  vec3 col = mix(uColorA, uColorB, smoothstep(0.12, 0.92, vLane) * 0.45 + tw * 0.42 + vGlow * 0.26);',
        '  float alpha = tex.a * uOpacity * (0.20 + vGlow * 0.78 + tw * 0.32 + uBeat * 0.10);',
        '  gl_FragColor = vec4(col * (0.82 + vGlow * 0.72 + tw * 0.32), alpha);',
        '}',
      ].join('\n'),
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    this.lyricStarRiver = new THREE.Points(geometry, material);
    this.lyricStarRiver.renderOrder = 45;
    this.lyricStarRiver.frustumCulled = false;
    this.lyricStarRiver.position.set(0.03, 0.10, 1.44);
    this.stageGroup.add(this.lyricStarRiver);
  }

  private createLyricSparks(): void {
    if (!this.stageGroup || !this.dotTexture || !this.renderer) return;
    const geometry = new THREE.BufferGeometry();
    this.lyricSparkBasePositions = new Float32Array(LYRIC_SPARK_COUNT * 3);
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(LYRIC_SPARK_COUNT * 3), 3));
    const seeds = new Float32Array(LYRIC_SPARK_COUNT);
    for (let i = 0; i < LYRIC_SPARK_COUNT; i += 1) seeds[i] = seededUnit(i * 29.87 + 4.2) * 1000;
    geometry.setAttribute('seed', new THREE.BufferAttribute(seeds, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: this.dotTexture },
        uPixel: { value: this.renderer.getPixelRatio() },
        uSize: { value: 0.055 },
        uOpacity: { value: 0 },
        uColor: { value: colorToVector(this.palette.highlight, '#fff7d2', 0.46) },
      },
      vertexShader: [
        'precision highp float;',
        'attribute float seed;',
        'uniform float uPixel,uSize,uOpacity;',
        'varying float vSeed;',
        'void main(){',
        '  vSeed = seed;',
        '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
        '  float dist = max(0.45, -mv.z);',
        '  float tw = 0.72 + 0.28 * sin(seed * 0.071);',
        '  gl_PointSize = clamp(uSize * uPixel * 122.0 * tw * (0.7 + uOpacity * 0.5) / dist, 1.0, 9.0);',
        '  gl_Position = projectionMatrix * mv;',
        '}',
      ].join('\n'),
      fragmentShader: [
        'precision highp float;',
        'uniform sampler2D uMap;',
        'uniform vec3 uColor;',
        'uniform float uOpacity;',
        'varying float vSeed;',
        'void main(){',
        '  vec4 tex = texture2D(uMap, gl_PointCoord);',
        '  if(tex.a < 0.02) discard;',
        '  float pulse = 0.68 + 0.32 * sin(vSeed * 0.047);',
        '  gl_FragColor = vec4(uColor * (0.88 + pulse * 0.48), tex.a * uOpacity * pulse);',
        '}',
      ].join('\n'),
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    this.lyricSparks = new THREE.Points(geometry, material);
    this.lyricSparks.renderOrder = 46;
    this.lyricSparks.frustumCulled = false;
    this.lyricSparks.position.set(0.03, -0.04, 1.48);
    this.stageGroup.add(this.lyricSparks);
    this.rebuildLyricParticleLayout(6.9, 6.9 / (2048 / 460));
  }

  private setupShelf(): void {
    if (!this.stageGroup) return;
    this.shelfGroup = new THREE.Group();
    this.shelfGroup.visible = false;
    this.shelfGroup.renderOrder = 24;
    this.shelfGeometry = new THREE.PlaneGeometry(2.05, 1.025, 1, 1);
    this.stageGroup.add(this.shelfGroup);
  }

  private disposeShelfCards(): void {
    this.shelfCards.forEach(card => {
      card.group.remove(card.mesh);
      this.shelfGroup?.remove(card.group);
      card.texture.dispose();
      card.mesh.material.dispose();
    });
    this.shelfCards = [];
    this.shelfRenderedStart = -1;
  }

  private requestShelfCover(url: string, card: MineradioShelfCard): void {
    if (!url) return;
    const cached = this.shelfCoverCache.get(url);
    if (cached?.loaded || cached?.loading || cached?.failed) return;
    const next = { loaded: false, failed: false, loading: true, img: undefined as HTMLImageElement | undefined };
    this.shelfCoverCache.set(url, next);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    img.onload = () => {
      next.img = img;
      next.loaded = true;
      next.loading = false;
      card.drawKey = '';
      this.drawShelfCard(card);
    };
    img.onerror = () => {
      next.failed = true;
      next.loading = false;
      card.drawKey = '';
      this.drawShelfCard(card);
    };
    img.src = url;
  }

  private drawShelfCard(card: MineradioShelfCard): void {
    const item = card.item;
    const rec = item.cover ? this.shelfCoverCache.get(item.cover) : null;
    const coverState = item.cover ? (rec?.loaded ? 'ready' : rec?.failed ? 'fail' : 'wait') : 'none';
    const pulseBucket = card.isCenter ? Math.round((this.smoothBass + this.beatPulse * 0.85) * 6) : 0;
    const drawKey = [
      item.title || '',
      item.artist || '',
      item.tag || '',
      item.subtitle || '',
      item.playlistId || '',
      item.queueIndex == null ? '' : item.queueIndex,
      item.cover || '',
      coverState,
      card.active ? 1 : 0,
      card.isCenter ? 1 : 0,
      card.selected ? 1 : 0,
      card.dofBucket,
      pulseBucket,
      this.settings.shelfAccentColor,
      this.settings.shelfBgOpacity,
    ].join('|');
    if (card.drawKey === drawKey) return;
    card.drawKey = drawKey;

    const ctx = card.ctx;
    const W = card.canvas.width;
    const H = card.canvas.height;
    const pad = 18;
    const accent = this.settings.shelfAccentColor;
    const isPlaylist = item.shelfType === 'playlist';
    const isNow = !isPlaylist && item.tag === '正在播放';
    ctx.clearRect(0, 0, W, H);

    drawRoundRect(ctx, pad, pad, W - pad * 2, H - pad * 2, 32);
    ctx.fillStyle = `rgba(0,0,0,${this.settings.shelfBgOpacity.toFixed(3)})`;
    ctx.fill();
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, 'rgba(255,255,255,0.10)');
    bg.addColorStop(1, 'rgba(255,255,255,0.018)');
    ctx.fillStyle = bg;
    ctx.fill();

    ctx.strokeStyle = isNow ? rgba(accent, 0.72) : 'rgba(255,255,255,0.14)';
    ctx.lineWidth = isNow ? 1.8 + Math.sin(this.elapsed * 3) * 0.28 + this.smoothBass * 1.2 : 1.1;
    ctx.stroke();

    if (card.selected) {
      ctx.save();
      drawRoundRect(ctx, pad + 2, pad + 2, W - pad * 2 - 4, H - pad * 2 - 4, 30);
      ctx.shadowColor = rgba(accent, 0.58);
      ctx.shadowBlur = 18;
      ctx.strokeStyle = rgba(accent, 0.72);
      ctx.lineWidth = 2.2;
      ctx.stroke();
      ctx.restore();
    }

    const coverSize = H - pad * 2 - 8;
    const coverX = pad + 6;
    const coverY = pad + 4;
    drawRoundRect(ctx, coverX, coverY, coverSize, coverSize, 26);
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    ctx.fill();
    if (item.cover) {
      if (rec?.loaded && rec.img) {
        ctx.save();
        drawRoundRect(ctx, coverX, coverY, coverSize, coverSize, 26);
        ctx.clip();
        ctx.drawImage(rec.img, coverX, coverY, coverSize, coverSize);
        ctx.restore();
      } else {
        this.requestShelfCover(item.cover, card);
      }
    }
    if (!rec?.loaded) {
      const coverGradient = ctx.createLinearGradient(coverX, coverY, coverX + coverSize, coverY + coverSize);
      coverGradient.addColorStop(0, rgba(accent, isNow ? 0.34 : 0.20));
      coverGradient.addColorStop(0.55, 'rgba(255,255,255,0.11)');
      coverGradient.addColorStop(1, 'rgba(0,0,0,0.18)');
      ctx.fillStyle = coverGradient;
      ctx.fill();
    }

    const textX = pad + coverSize + 32;
    ctx.font = `700 17px ${fontFamily()}`;
    ctx.fillStyle = isNow ? rgba(accent, 0.92) : 'rgba(255,255,255,0.92)';
    ctx.fillText(item.tag || (isNow ? '正在播放' : `#${card.index + 1}`), textX, pad + 36);

    ctx.font = `700 30px ${fontFamily()}`;
    ctx.fillStyle = 'rgba(255,255,255,0.96)';
    wrapCanvasText(ctx, item.title || 'DancingMusic', textX, pad + 78, W - textX - pad - 14, 36, 2);

    ctx.font = `400 17px ${fontFamily()}`;
    ctx.fillStyle = 'rgba(255,255,255,0.52)';
    wrapCanvasText(ctx, item.subtitle || item.artist || '未知歌手', textX, pad + 156, W - textX - pad - 14, 24, 2);

    ctx.strokeStyle = isNow ? rgba(accent, 0.90) : 'rgba(255,255,255,0.30)';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(textX, H - pad - 22);
    ctx.lineTo(textX + Math.min(260, 80 + this.smoothBass * 320), H - pad - 22);
    ctx.stroke();

    if (card.isCenter) {
      const actionY = H - pad - 78;
      if (isPlaylist) {
        drawRoundRect(ctx, textX, actionY, 138, 38, 18);
        const playGrad = ctx.createLinearGradient(textX, actionY, textX + 138, actionY + 38);
        playGrad.addColorStop(0, 'rgba(255,255,255,0.88)');
        playGrad.addColorStop(0.55, rgba(accent, 0.94));
        playGrad.addColorStop(1, rgba(accent, 0.58));
        ctx.fillStyle = playGrad;
        ctx.fill();
        ctx.strokeStyle = rgba(accent, 0.44);
        ctx.lineWidth = 1.1;
        ctx.stroke();
        ctx.font = `800 14px ${fontFamily()}`;
        ctx.fillStyle = readableInkForHex(accent);
        ctx.fillText('播放歌单', textX + 38, actionY + 24);

        drawRoundRect(ctx, textX + 150, actionY, 104, 38, 18);
        ctx.fillStyle = 'rgba(255,255,255,0.055)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.14)';
        ctx.lineWidth = 1.1;
        ctx.stroke();
        ctx.font = `700 14px ${fontFamily()}`;
        ctx.fillStyle = 'rgba(255,255,255,0.78)';
        ctx.fillText('详情', textX + 184, actionY + 24);
      } else {
        ctx.font = `600 14px ${fontFamily()}`;
        ctx.fillStyle = rgba(accent, 0.84);
        ctx.fillText(isNow ? '当前歌曲' : '队列歌曲', textX, actionY + 25);
      }
      if (isNow) {
        drawRoundRect(ctx, textX + 88, actionY, 104, 38, 18);
        const playGrad = ctx.createLinearGradient(textX + 88, actionY, textX + 192, actionY + 38);
        playGrad.addColorStop(0, 'rgba(255,255,255,0.88)');
        playGrad.addColorStop(0.55, rgba(accent, 0.94));
        playGrad.addColorStop(1, rgba(accent, 0.58));
        ctx.fillStyle = playGrad;
        ctx.fill();
        ctx.font = `800 14px ${fontFamily()}`;
        ctx.fillStyle = readableInkForHex(accent);
        ctx.fillText('PLAYING', textX + 110, actionY + 24);
      }
    }

    if (card.dofBlur > 0.12) {
      drawRoundRect(ctx, pad, pad, W - pad * 2, H - pad * 2, 32);
      ctx.fillStyle = `rgba(0,0,0,${Math.min(0.28, card.dofBlur * 0.18).toFixed(3)})`;
      ctx.fill();
    }

    card.texture.needsUpdate = true;
  }

  private buildShelfItems(): PlaylistSongInfo[] {
    const preferredCollections = this.settings.shelfMergeCollections
      ? this.playlistCollections
      : this.playlistCollections.filter(item => (item.tag || '').includes('收藏'));
    const visibleCollections = preferredCollections.length ? preferredCollections : this.playlistCollections;
    const collectionItems: PlaylistSongInfo[] = visibleCollections.map(item => ({
      shelfType: 'playlist',
      title: item.title,
      artist: item.source || 'Playlist',
      subtitle: item.subtitle || [
        item.source,
        typeof item.trackCount === 'number' ? `${item.trackCount} 首` : '',
      ].filter(Boolean).join(' · '),
      cover: item.cover,
      tag: item.tag || '歌单',
      playlistId: item.id,
      trackCount: item.trackCount,
      source: item.source,
    }));
    const queueItems = this.playlist.length
      ? this.playlist.map((song, index) => ({
        ...song,
        shelfType: 'queue' as const,
        tag: index === this.currentIndex ? '正在播放' : `#${index + 1}`,
        queueIndex: index,
      }))
      : (this.songInfo.title ? [{ ...this.songInfo, shelfType: 'queue' as const, tag: '当前歌曲', queueIndex: 0 }] : []);
    return collectionItems.length ? collectionItems : queueItems;
  }

  private clampShelfCenter(value: number): number {
    if (!this.shelfAllItems.length) return 0;
    return Math.max(0, Math.min(this.shelfAllItems.length - 1, Math.round(value)));
  }

  private setShelfCenterTarget(value: number, pulse = true): void {
    const next = this.clampShelfCenter(value);
    const prev = this.clampShelfCenter(this.shelfCenterTarget);
    this.shelfCenterTarget = next;
    if (pulse && next !== prev) {
      this.shelfCards.forEach(card => {
        if (card.index === next) {
          card.fxPulse = Math.max(card.fxPulse, 0.62);
          card.selected = true;
          card.drawKey = '';
        }
      });
    }
  }

  private ensureShelfCards(): void {
    if (!this.shelfGroup || !this.shelfGeometry) return;
    const songs = this.buildShelfItems();
    const itemsKey = [
      songs.map(song => `${song.shelfType || ''}:${song.playlistId || ''}:${song.queueIndex ?? ''}:${song.title}:${song.artist}:${song.cover || ''}:${song.tag || ''}:${song.subtitle || ''}`).join('~'),
      this.settings.shelfAccentColor,
      this.settings.shelfBgOpacity,
    ].join('|');
    const itemsChanged = itemsKey !== this.shelfItemsKey;
    if (itemsChanged) {
      const wasQueue = this.shelfAllItems[0]?.shelfType === 'queue';
      this.shelfItemsKey = itemsKey;
      this.shelfAllItems = songs;
      if (songs[0]?.shelfType === 'queue') {
        this.shelfCenterTarget = this.clampShelfCenter(this.currentIndex);
        if (!wasQueue) this.shelfCenterSmooth = this.shelfCenterTarget;
      } else {
        this.shelfCenterTarget = this.clampShelfCenter(this.shelfCenterTarget);
        if (!this.shelfCards.length) this.shelfCenterSmooth = this.shelfCenterTarget;
      }
    }
    if (!songs.length) {
      this.shelfAllItems = [];
      this.shelfTextureKey = '';
      this.disposeShelfCards();
      return;
    }

    const radius = SHELF_VISIBLE_RADIUS;
    const center = this.clampShelfCenter(this.shelfCenterTarget);
    let start = Math.max(0, center - radius);
    let end = Math.min(songs.length - 1, start + radius * 2);
    start = Math.max(0, end - radius * 2);
    const windowKey = [
      this.shelfItemsKey,
      start,
      end,
    ].join('|');
    if (windowKey === this.shelfTextureKey && this.shelfCards.length === end - start + 1) return;
    this.shelfTextureKey = windowKey;
    this.disposeShelfCards();

    for (let sourceIndex = start; sourceIndex <= end; sourceIndex += 1) {
      const song = songs[sourceIndex];
      const active = sourceIndex === center;
      const canvas = document.createElement('canvas');
      canvas.width = 720;
      canvas.height = 360;
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        opacity: active ? 0.96 : 0.42,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(this.shelfGeometry, material);
      mesh.renderOrder = active ? 80 : 50;
      const group = new THREE.Group();
      group.add(mesh);
      this.shelfGroup.add(group);
      const card: MineradioShelfCard = {
        group,
        mesh,
        canvas,
        ctx,
        texture,
        item: song,
        index: sourceIndex,
        relativeIndex: sourceIndex - this.shelfCenterSmooth,
        active,
        isCenter: active,
        selected: active,
        floatMix: 0,
        fxPulse: active ? 0.4 : 0,
        dofBlur: 0,
        dofBucket: -1,
        drawKey: '',
      };
      this.shelfCards.push(card);
      this.drawShelfCard(card);
    }
    this.shelfRenderedStart = start;
  }

  private installPointerHandlers(): void {
    if (!this.canvas) return;
    this.canvas.addEventListener('pointerdown', this.handlePointerDown);
    this.canvas.addEventListener('pointermove', this.handlePointerMove);
    this.canvas.addEventListener('pointerup', this.handlePointerUp);
    this.canvas.addEventListener('pointercancel', this.handlePointerUp);
    this.canvas.addEventListener('pointerleave', this.handlePointerLeave);
    this.canvas.addEventListener('dblclick', this.handleDoubleClick);
    this.canvas.addEventListener('wheel', this.handleWheel, { passive: false });
    this.canvas.style.cursor = 'grab';
    this.canvas.style.touchAction = 'none';
  }

  private removePointerHandlers(): void {
    if (!this.canvas) return;
    this.canvas.removeEventListener('pointerdown', this.handlePointerDown);
    this.canvas.removeEventListener('pointermove', this.handlePointerMove);
    this.canvas.removeEventListener('pointerup', this.handlePointerUp);
    this.canvas.removeEventListener('pointercancel', this.handlePointerUp);
    this.canvas.removeEventListener('pointerleave', this.handlePointerLeave);
    this.canvas.removeEventListener('dblclick', this.handleDoubleClick);
    this.canvas.removeEventListener('wheel', this.handleWheel);
    this.canvas.style.cursor = '';
    this.canvas.style.touchAction = '';
  }

  private rebuildSongState(): void {
    this.palette = getMineradioPalette(this.songInfo.title, this.songInfo.artist);
    this.lyrics = getRenderableStageLyrics(this.songInfo.lyrics, this.songInfo.title, this.songInfo.artist);
    this.activeLyricIndex = -99;
    this.currentText = '';
    this.currentProgress = 0;
    this.lineAge = 0;
    this.lyricTextureKey = '';
    this.ripples.forEach(ripple => {
      ripple.x = 0;
      ripple.y = 0;
      ripple.age = -10;
      ripple.str = 0;
    });
    this.lastRippleAt = -10;
    this.lastSectionRippleAt = -10;
    this.lastBassRising = false;
    this.loadCover();
  }

  private triggerRipple(seed: number, strength: number): void {
    if (!this.ripples.length) return;
    const region = this.rippleRegions[Math.floor(seededUnit(seed) * this.rippleRegions.length) % this.rippleRegions.length];
    const jitterX = (seededUnit(seed * 1.71 + 4.2) - 0.5) * 0.7;
    const jitterY = (seededUnit(seed * 2.37 + 8.6) - 0.5) * 0.7;
    const ripple = this.ripples[this.rippleIdx];
    ripple.x = region.x + jitterX;
    ripple.y = region.y + jitterY;
    ripple.age = 0;
    ripple.str = strength;
    this.rippleIdx = (this.rippleIdx + 1) % RIPPLE_MAX;
  }

  private updateRipples(dt: number, isPlaying: boolean): void {
    if (!this.rippleData || !this.rippleTexture || !this.uniforms) return;
    const bassDrive = Math.max(this.smoothBass, this.beatPulse * 0.9, this.sectionClimax * 0.55);
    const trigger = getMineradioRippleTrigger({
      bassDrive,
      climax: this.sectionClimax,
      elapsed: this.elapsed,
      lastRippleAt: this.lastRippleAt,
      wasBassRising: this.lastBassRising,
    });
    this.lastBassRising = trigger.nextBassRising;

    if (isPlaying && trigger.shouldTrigger) {
      this.lastRippleAt = this.elapsed;
      const count = this.sectionClimax > 0.42 ? 3 : 2;
      for (let i = 0; i < count; i += 1) {
        const seed = this.elapsed * 11.7 + i * 19.3 + this.rippleIdx * 3.1;
        const strength = 0.65 + bassDrive * 1.35 + this.sectionClimax * 0.72 + seededUnit(seed * 4.8) * 0.24;
        this.triggerRipple(seed, strength);
      }
    }

    const sectionCooldown = Math.max(0.22, 0.64 - this.sectionClimax * 0.36);
    if (isPlaying && this.sectionClimax > 0.46 && this.elapsed - this.lastSectionRippleAt > sectionCooldown) {
      this.lastSectionRippleAt = this.elapsed;
      const count = this.sectionClimax > 0.72 ? 2 : 1;
      for (let i = 0; i < count; i += 1) {
        this.triggerRipple(
          this.elapsed * 7.9 + this.rippleIdx * 13.1 + i * 17.7,
          0.82 + this.sectionClimax * 1.22 + this.sectionBloom * 0.34,
        );
      }
    }

    let active = 0;
    for (let i = 0; i < RIPPLE_MAX; i += 1) {
      const ripple = this.ripples[i];
      if (ripple.str > 0.005) {
        ripple.age += dt;
        if (ripple.age > 2) {
          ripple.age = -10;
          ripple.str = 0;
        }
      }
      const offset = i * 4;
      this.rippleData[offset] = ripple.x;
      this.rippleData[offset + 1] = ripple.y;
      this.rippleData[offset + 2] = ripple.age;
      this.rippleData[offset + 3] = ripple.str;
      if (ripple.str > 0.005) active += 1;
    }
    this.rippleTexture.needsUpdate = true;
    this.uniforms.uRippleCount.value = active;
  }

  private loadCover(): void {
    const textureSize = coverTextureSizeForResolution(this.settings.coverResolution);
    const fallback = makeFallbackCoverCanvas(this.palette, this.songInfo.title, this.songInfo.artist, textureSize);
    if (!this.songInfo.cover) {
      this.applyCoverCanvas(fallback, false);
      return;
    }
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    img.onload = () => this.applyCoverCanvas(makeSquareCoverCanvas(img, coverTextureSizeForResolution(this.settings.coverResolution)), true);
    img.onerror = () => this.applyCoverCanvas(fallback, false);
    img.src = this.songInfo.cover;
  }

  private applyCoverCanvas(canvas: HTMLCanvasElement, hasCover: boolean): void {
    if (!this.uniforms || !this.coverTexture || !this.previousCoverTexture || !this.edgeTexture) return;
    if (this.coverTexture.image) {
      const prev = document.createElement('canvas');
      const source = this.coverTexture.image as HTMLCanvasElement;
      prev.width = source.width || 256;
      prev.height = source.height || 256;
      prev.getContext('2d')?.drawImage(source, 0, 0, prev.width, prev.height);
      this.previousCoverTexture.image = prev;
      this.previousCoverTexture.needsUpdate = true;
    }
    this.coverTexture.image = canvas;
    this.coverTexture.needsUpdate = true;
    this.edgeTexture.image = buildEdgeAndDepth(canvas);
    this.edgeTexture.needsUpdate = true;
    this.uniforms.uHasCover.value = hasCover ? 1 : 0.72;
    this.uniforms.uHasDepth.value = 1;
    this.uniforms.uColorMixT.value = 1;
    this.uniforms.uBurstAmt.value = Math.max(this.uniforms.uBurstAmt.value, 0.34);
  }

  private handlePointerDown = (event: PointerEvent): void => {
    if (!this.canvas) return;
    if (event.button === 2) return;
    this.pointerId = event.pointerId;
    this.isDraggingView = true;
    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;
    this.lastPointerAt = performance.now();
    this.pointerDownAt = { x: event.clientX, y: event.clientY, hadDrag: false };
    this.particleSpin.vx = 0;
    this.particleSpin.vy = 0;
    this.queueParticlePointerFrame(event.clientX, event.clientY);
    this.canvas.style.cursor = 'grabbing';
    try {
      this.canvas.setPointerCapture(event.pointerId);
    } catch {
      // Synthetic pointer contexts may not allow capture.
    }
  };

  private handlePointerMove = (event: PointerEvent): void => {
    this.queueParticlePointerFrame(event.clientX, event.clientY);
    if (!this.isDraggingView || this.pointerId !== event.pointerId) return;
    const dx = event.clientX - this.lastPointerX;
    const dy = event.clientY - this.lastPointerY;
    const now = performance.now();
    const dt = Math.max(1 / 120, Math.min(0.08, (now - this.lastPointerAt) / 1000 || 1 / 60));
    this.pendingDrag.dirty = true;
    this.pendingDrag.dx += dx;
    this.pendingDrag.dy += dy;
    this.pendingDrag.elapsed += dt;
    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;
    this.lastPointerAt = now;
    const totalDx = event.clientX - this.pointerDownAt.x;
    const totalDy = event.clientY - this.pointerDownAt.y;
    if (Math.sqrt(totalDx * totalDx + totalDy * totalDy) > CLICK_THRESHOLD) {
      this.pointerDownAt.hadDrag = true;
    }
  };

  private handleDoubleClick = (event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    this.lastClickAt = 0;
    this.resetParticleRotationTarget(true);
  };

  private pickShelfCardAt(clientX: number, clientY: number): { card: MineradioShelfCard; detail: boolean } | null {
    if (!this.canvas || !this.camera || !this.shelfGroup?.visible || !this.shelfCards.length) return null;
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return null;
    this.shelfActionNdc.set(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -(((clientY - rect.top) / rect.height) * 2 - 1),
    );
    this.shelfActionRay.setFromCamera(this.shelfActionNdc, this.camera);
    const meshes = this.shelfCards
      .filter(card => card.group.visible && card.mesh.visible)
      .map(card => card.mesh);
    const [hit] = this.shelfActionRay.intersectObjects(meshes, false);
    if (!hit) return null;
    const card = this.shelfCards.find(item => item.mesh === hit.object);
    if (!card) return null;

    let detail = false;
    if (card.item.shelfType === 'playlist' && hit.uv) {
      const W = card.canvas.width;
      const H = card.canvas.height;
      const pad = 18;
      const coverSize = H - pad * 2 - 8;
      const textX = pad + coverSize + 32;
      const actionY = H - pad - 78;
      const x = hit.uv.x * W;
      const y = (1 - hit.uv.y) * H;
      const mirroredY = hit.uv.y * H;
      const inActionY = (value: number) => value >= actionY - 8 && value <= actionY + 46;
      detail = x >= textX + 142 && x <= textX + 270 && (inActionY(y) || inActionY(mirroredY));
    }
    return { card, detail };
  }

  private triggerShelfCardAction(card: MineradioShelfCard, detail: boolean): boolean {
    if (!card.isCenter) {
      this.setShelfCenterTarget(card.index, true);
      return true;
    }
    if (!this.hostActions) return false;
    const item = card.item;
    card.selected = true;
    card.fxPulse = Math.max(card.fxPulse, 0.95);
    card.drawKey = '';
    this.drawShelfCard(card);

    if (item.shelfType === 'playlist' && item.playlistId) {
      const request = { id: item.playlistId, title: item.title };
      const action = detail ? this.hostActions.openPlaylistDetail : this.hostActions.playPlaylist;
      if (!action) return false;
      void Promise.resolve(action(request)).catch(() => {
        /* Host owns connector failures. */
      });
      return true;
    }

    const queueIndex = typeof item.queueIndex === 'number' ? item.queueIndex : card.index;
    if (this.hostActions.playQueueIndex && Number.isFinite(queueIndex)) {
      void Promise.resolve(this.hostActions.playQueueIndex(queueIndex)).catch(() => {
        /* Host owns queue failures. */
      });
      return true;
    }
    return false;
  }

  private handleWheel = (event: WheelEvent): void => {
    if (!this.shelfGroup?.visible || this.settings.shelf === 'off' || this.shelfAllItems.length < 2) return;
    const now = performance.now();
    if (now - this.shelfLastWheelAt < 76) {
      event.preventDefault();
      return;
    }
    const axis = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    if (Math.abs(axis) < 2) return;
    event.preventDefault();
    this.shelfLastWheelAt = now;
    this.setShelfCenterTarget(this.shelfCenterTarget + (axis > 0 ? 1 : -1), true);
  };

  private handlePointerUp = (event: PointerEvent): void => {
    if (this.pointerId !== event.pointerId) return;
    this.flushPointerDragFrame();
    const releaseDx = event.clientX - this.pointerDownAt.x;
    const releaseDy = event.clientY - this.pointerDownAt.y;
    const releaseDistance = Math.sqrt(releaseDx * releaseDx + releaseDy * releaseDy);
    if (!this.pointerDownAt.hadDrag && releaseDistance <= CLICK_THRESHOLD) {
      const shelfHit = this.pickShelfCardAt(event.clientX, event.clientY);
      if (shelfHit && this.triggerShelfCardAction(shelfHit.card, shelfHit.detail)) {
        this.lastClickAt = 0;
      } else {
        const now = performance.now();
        const lastDx = event.clientX - this.lastClickPoint.x;
        const lastDy = event.clientY - this.lastClickPoint.y;
        const lastDistance = Math.sqrt(lastDx * lastDx + lastDy * lastDy);
        if (this.lastClickAt > 0 && now - this.lastClickAt < 320 && lastDistance <= CLICK_THRESHOLD * 1.8) {
          this.lastClickAt = 0;
          this.resetParticleRotationTarget(true);
        } else {
          this.lastClickAt = now;
          this.lastClickPoint = { x: event.clientX, y: event.clientY };
        }
      }
    } else {
      this.lastClickAt = 0;
    }
    if (this.canvas) {
      this.canvas.style.cursor = 'grab';
      try {
        this.canvas.releasePointerCapture(event.pointerId);
      } catch {
        // Pointer may already be released.
      }
    }
    this.pointerId = null;
    this.isDraggingView = false;
    this.pendingDrag.dirty = false;
    this.pendingDrag.dx = 0;
    this.pendingDrag.dy = 0;
    this.pendingDrag.elapsed = 0;
  };

  private handlePointerLeave = (): void => {
    if (this.isDraggingView) return;
    this.particlePointerFrame.dirty = false;
    this.mouseWorld.set(-999, -999, 0);
    this.mouseActive = false;
    if (this.canvas) this.canvas.style.cursor = 'grab';
  };

  private resetParticleRotationTarget(animated: boolean): void {
    const currentX = animated && this.coverGroup ? this.coverGroup.rotation.x : 0;
    const currentY = animated && this.coverGroup ? this.coverGroup.rotation.y : 0;
    this.rotationReturn.active = animated;
    this.rotationReturn.velocityX = 0;
    this.rotationReturn.velocityY = 0;
    this.gestureRotation.x = currentX;
    this.gestureRotation.y = currentY;
    this.particleSpin.vx = 0;
    this.particleSpin.vy = 0;
    this.pendingDrag.dirty = false;
    this.pendingDrag.dx = 0;
    this.pendingDrag.dy = 0;
    this.pendingDrag.elapsed = 0;
    if (!animated && this.coverGroup) {
      this.coverGroup.rotation.set(0, 0, 0);
      this.lyricMesh?.rotation.set(0, 0, 0);
      this.lyricShadow?.rotation.set(0, 0, 0);
      this.lyricGlow?.rotation.set(0, 0, 0);
      this.lyricSun?.rotation.set(0, 0, 0);
      this.lyricSparks?.rotation.set(0, 0, 0);
      this.lyricStarRiver?.rotation.set(0, 0, 0);
    }
  }

  private clampParticleSpinVelocity(value: number): number {
    if (!Number.isFinite(value)) return 0;
    return Math.max(-PARTICLE_SPIN_MAX, Math.min(PARTICLE_SPIN_MAX, value));
  }

  private applyParticleSpinDrag(dx: number, dy: number, dt: number): void {
    this.rotationReturn.active = false;
    const rx = dy * PARTICLE_POINTER_SPIN_X;
    const ry = dx * PARTICLE_POINTER_SPIN_Y;
    this.gestureRotation.x += rx;
    this.gestureRotation.y += ry;
    if (dt > 0) {
      this.particleSpin.vx = this.clampParticleSpinVelocity((rx / dt) * 0.46);
      this.particleSpin.vy = this.clampParticleSpinVelocity((ry / dt) * 0.46);
    }
  }

  private flushPointerDragFrame(): void {
    if (!this.pendingDrag.dirty) return;
    const dt = Math.max(1 / 120, Math.min(0.08, this.pendingDrag.elapsed || 1 / 60));
    this.applyParticleSpinDrag(this.pendingDrag.dx, this.pendingDrag.dy, dt);
    this.pendingDrag.dirty = false;
    this.pendingDrag.dx = 0;
    this.pendingDrag.dy = 0;
    this.pendingDrag.elapsed = 0;
  }

  private rebaseParticleRotationAxis(axis: 'x' | 'y'): void {
    const limit = Math.PI * 10;
    if (Math.abs(this.gestureRotation[axis]) < limit) return;
    const offset = Math.round(this.gestureRotation[axis] / (Math.PI * 2)) * Math.PI * 2;
    this.gestureRotation[axis] -= offset;
    if (this.coverGroup) this.coverGroup.rotation[axis] -= offset;
  }

  private tickGestureRotation(dt: number): void {
    if (this.rotationReturn.active) {
      const spring = 64;
      const damping = 14;
      const ax = -this.gestureRotation.x * spring - this.rotationReturn.velocityX * damping;
      const ay = -this.gestureRotation.y * spring - this.rotationReturn.velocityY * damping;
      this.rotationReturn.velocityX += ax * dt;
      this.rotationReturn.velocityY += ay * dt;
      this.gestureRotation.x += this.rotationReturn.velocityX * dt;
      this.gestureRotation.y += this.rotationReturn.velocityY * dt;
      const targetSettled =
        Math.abs(this.gestureRotation.x) < 0.0008 &&
        Math.abs(this.gestureRotation.y) < 0.0008 &&
        Math.abs(this.rotationReturn.velocityX) < 0.002 &&
        Math.abs(this.rotationReturn.velocityY) < 0.002;
      if (targetSettled) {
        this.gestureRotation.x = 0;
        this.gestureRotation.y = 0;
        this.rotationReturn.velocityX = 0;
        this.rotationReturn.velocityY = 0;
        const coverSettled = !this.coverGroup || (
          Math.abs(this.coverGroup.rotation.x) < 0.012 &&
          Math.abs(this.coverGroup.rotation.y) < 0.012
        );
        if (coverSettled) {
          if (this.coverGroup) {
            this.coverGroup.rotation.x = 0;
            this.coverGroup.rotation.y = 0;
          }
          this.rotationReturn.active = false;
        }
      }
      return;
    }
    if (Math.abs(this.particleSpin.vx) > 0.0001 || Math.abs(this.particleSpin.vy) > 0.0001) {
      this.gestureRotation.x += this.particleSpin.vx * dt;
      this.gestureRotation.y += this.particleSpin.vy * dt;
      this.rebaseParticleRotationAxis('x');
      this.rebaseParticleRotationAxis('y');
    }
    this.particleSpin.vx *= Math.pow(this.particleSpin.damping, dt * 60);
    this.particleSpin.vy *= Math.pow(this.particleSpin.damping, dt * 60);
    if (Math.abs(this.particleSpin.vx) < 0.01) this.particleSpin.vx = 0;
    if (Math.abs(this.particleSpin.vy) < 0.01) this.particleSpin.vy = 0;
  }

  private queueParticlePointerFrame(clientX: number, clientY: number): void {
    if (!this.canvas) return;
    this.particlePointerFrame.clientX = clientX;
    this.particlePointerFrame.clientY = clientY;
    this.particlePointerFrame.dirty = true;
  }

  private particleLocalPointFromNdc(ndcX: number, ndcY: number, out: THREE.Vector3): boolean {
    if (!this.camera) return false;
    this.particlePointerNdc.set(ndcX, ndcY);
    this.particlePointerRay.setFromCamera(this.particlePointerNdc, this.camera);
    if (this.particles) {
      this.particles.updateMatrixWorld(true);
      this.particles.getWorldPosition(this.particlePointerPlanePoint);
      this.particles.getWorldQuaternion(this.particlePointerQuat);
      this.particlePointerPlaneNormal.set(0, 0, 1).applyQuaternion(this.particlePointerQuat).normalize();
      if (Math.abs(this.particlePointerPlaneNormal.dot(this.particlePointerRay.ray.direction)) < 0.16) return false;
      this.particlePointerPlane.setFromNormalAndCoplanarPoint(this.particlePointerPlaneNormal, this.particlePointerPlanePoint);
      if (this.particlePointerRay.ray.intersectPlane(this.particlePointerPlane, this.particlePointerWorldHit)) {
        out.copy(this.particlePointerWorldHit);
        this.particles.worldToLocal(out);
        return Number.isFinite(out.x) && Number.isFinite(out.y) && Math.abs(out.x) < 8.5 && Math.abs(out.y) < 8.5;
      }
    }
    this.particlePointerPlaneNormal.set(0, 0, 1);
    this.particlePointerPlane.set(this.particlePointerPlaneNormal, 0);
    if (this.particlePointerRay.ray.intersectPlane(this.particlePointerPlane, this.particlePointerWorldHit)) {
      out.copy(this.particlePointerWorldHit);
      return Number.isFinite(out.x) && Number.isFinite(out.y) && Math.abs(out.x) < 8.5 && Math.abs(out.y) < 8.5;
    }
    return false;
  }

  private updateParticlePointerFrame(): void {
    if (!this.particlePointerFrame.dirty) return;
    this.particlePointerFrame.dirty = false;
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    this.particlePointerFrame.ndcX = ((this.particlePointerFrame.clientX - rect.left) / rect.width) * 2 - 1;
    this.particlePointerFrame.ndcY = -(((this.particlePointerFrame.clientY - rect.top) / rect.height) * 2 - 1);
    if (this.particleLocalPointFromNdc(this.particlePointerFrame.ndcX, this.particlePointerFrame.ndcY, this.particlePointerLocalHit)) {
      this.mouseWorld.x = this.particlePointerLocalHit.x;
      this.mouseWorld.y = this.particlePointerLocalHit.y;
      this.mouseActive = true;
    } else {
      this.mouseWorld.set(-999, -999, 0);
      this.mouseActive = false;
    }
  }

  private updateLyricState(): void {
    const window = getLyricProgressWindow(this.lyrics, this.currentTime);
    let nextIndex = window.activeIndex;
    let nextText = window.line?.text || '';
    let nextProgress = window.progress;
    if (nextIndex < 0) {
      const fallback = this.lyrics[0];
      const hasSong = Boolean(this.songInfo.title || this.songInfo.artist);
      const fallbackText = fallback?.text || this.songInfo.title || 'Mineradio';
      nextIndex = -2;
      nextText = hasSong && !fallbackText.includes('半屏') ? fallbackText : 'Mineradio';
      nextProgress = this.lyrics[0]?.time ? clamp01(this.currentTime / Math.max(0.8, this.lyrics[0].time)) : 0.18;
    }
    if (nextText.includes('半屏')) nextText = 'Mineradio';
    if (nextIndex !== this.activeLyricIndex || nextText !== this.currentText) {
      this.activeLyricIndex = nextIndex;
      this.currentText = nextText;
      this.currentProgress = nextProgress;
      this.lineAge = 0;
      this.lyricTextureKey = '';
      return;
    }
    this.currentProgress += (nextProgress - this.currentProgress) * 0.24;
  }

  private updateCameraDynamics(rawEnergy: number, rawLow: number): void {
    const energy = clamp01(rawEnergy);
    const low = clamp01(rawLow);
    const composite = clamp01(energy * 0.62 + low * 0.38);
    const floor = 0.18;
    const lift = smoothstep((composite - floor) / Math.max(0.18, 1 - floor));
    let target = 0.42 + lift * 0.56 + clamp01((low - 0.22) / 0.50) * 0.12;
    if (energy > 0.48 && low > 0.46) target = Math.max(target, 0.92);
    target = Math.max(0.34, Math.min(1.08, target));
    this.cameraDynamicsScale += (target - this.cameraDynamicsScale) * (target > this.cameraDynamicsScale ? 0.045 : 0.022);
  }

  private triggerCameraBeat(audioData: AudioData, onset: number): void {
    if (!this.settings.cinema) return;
    const rhythm = audioData.rhythm;
    const section = rhythm.section;
    const strength = clamp01(Math.max(rhythm.beat.strength, rhythm.pulse, onset, audioData.bassChange));
    const confidence = clamp01(Math.max(rhythm.beat.confidence, rhythm.onset.energy, rhythm.onset.bass));
    const visualImpact = clamp01(strength * 0.54 + confidence * 0.18 + section.climax * 0.28 + section.bloom * 0.12);
    const minGap = section.climax > 0.62 ? 0.255 : 0.36;
    if (this.elapsed - this.lastCameraBeatAt < minGap && visualImpact < 0.78) return;
    if (visualImpact < 0.38 && strength < 0.58) return;
    this.lastCameraBeatAt = this.elapsed;

    const lowTone = clamp01(Math.max(rhythm.bass, audioData.bassLevel));
    const bodyTone = clamp01(Math.max(rhythm.mid, audioData.midLevel));
    const snapTone = clamp01(Math.max(rhythm.treble, audioData.trebleLevel));
    const mass = clamp01(lowTone * 0.72 + bodyTone * 0.24 + strength * 0.20);
    const dynScale = Math.max(0.18, Math.min(1.18, this.cameraDynamicsScale * (0.92 + visualImpact * 0.12 + mass * 0.08)));
    const comboSlot = Math.abs(Math.floor((this.currentTime || this.elapsed) * 2.7)) % 4;
    const combo = comboSlot === 0 ? 'downbeat' : (comboSlot === 1 ? 'push' : (comboSlot === 2 ? 'drop' : 'rebound'));
    let amp = Math.max(0.08, Math.min(0.68, 0.15 + strength * 0.34 + confidence * 0.06 + mass * 0.13 + snapTone * 0.04));
    amp *= dynScale;
    let zoomAmp = (0.070 + mass * 0.190 + strength * 0.045) * (0.76 + dynScale * 0.28);
    let phiAmp = (0.002 + bodyTone * 0.010 + section.bloom * 0.004) * (0.82 + dynScale * 0.20);
    let thetaAmp = 0.00035 + bodyTone * 0.0018;
    let rollAmp = (0.0008 + snapTone * 0.004) * (0.78 + dynScale * 0.24);
    if (combo === 'downbeat') {
      amp *= 1.10;
      zoomAmp *= 1.18;
      phiAmp *= 0.72;
    } else if (combo === 'push') {
      amp *= 0.84;
      zoomAmp *= 0.88;
      phiAmp *= 0.62;
      thetaAmp *= 1.15;
    } else if (combo === 'drop') {
      amp *= 0.96;
      zoomAmp *= 0.72;
      phiAmp *= 1.22;
    } else {
      amp *= 0.74;
      zoomAmp *= 0.62;
      phiAmp *= 0.78;
    }
    const sign = Math.sin((this.currentTime || this.elapsed) * 2.399963 + snapTone * 1.4 - lowTone * 1.2) >= 0 ? 1 : -1;
    const punch = Math.min(0.90, amp);
    this.cameraPunch = Math.max(this.cameraPunch, punch);
    this.cameraRadiusKick = Math.max(this.cameraRadiusKick, punch * zoomAmp);
    this.cameraPhiKick += ((combo === 'drop' ? 1 : -1) * punch * phiAmp - this.cameraPhiKick) * 0.70;
    this.cameraThetaKick += (sign * punch * thetaAmp - this.cameraThetaKick) * 0.70;
    this.cameraRollKick += (sign * punch * rollAmp - this.cameraRollKick) * 0.72;
  }

  private updateMotion(audioData: AudioData, dt: number, isPlaying: boolean): void {
    const rhythm = audioData.rhythm;
    const section = rhythm.section;
    const energy = clamp01(Math.max(audioData.energy, rhythm.energy, section.energy * 0.88, section.climax * 0.62));
    const vocalLike = clamp01(
      Math.max(audioData.midLevel, rhythm.bands.vocal * 0.82) * 0.50 +
      Math.max(audioData.trebleLevel, rhythm.treble) * 0.22 +
      audioData.volume * 0.12 +
      section.bloom * 0.36 +
      section.climax * 0.18,
    );
    const sunTarget = isPlaying ? Math.max(section.bloom, smoothstep((energy * 0.42 + vocalLike * 0.58 - 0.24) / 0.68)) : 0;
    this.sunEnergy += (sunTarget - this.sunEnergy) * (sunTarget > this.sunEnergy ? 0.075 : 0.034);
    const sectionTarget = isPlaying
      ? clamp01(section.climax * 1.42 + section.bloom * 0.34 + Math.max(0, section.dynamics - 0.58) * 0.44)
      : 0;
    this.sectionClimax += (sectionTarget - this.sectionClimax) * (sectionTarget > this.sectionClimax ? 0.18 : 0.058);
    this.sectionDynamics += ((isPlaying ? Math.max(0, Math.min(1.18, section.dynamics || 0)) : 0) - this.sectionDynamics) * 0.10;
    this.sectionBloom += ((isPlaying ? clamp01(section.bloom) : 0) - this.sectionBloom) * (section.bloom > this.sectionBloom ? 0.13 : 0.045);
    const onset = Math.max(clamp01(audioData.bassChange), clamp01(audioData.volumeChange) * 0.72, rhythm.onset.bass, rhythm.onset.energy * 0.72);
    this.updateCameraDynamics(energy, Math.max(rhythm.bass, audioData.bassLevel));
    const sustainedSectionGlow = section.climax * 0.38 + section.bloom * 0.22;
    if (sustainedSectionGlow > this.beatGlow) {
      this.beatGlow = Math.min(1.16, sustainedSectionGlow);
    }
    if ((rhythm.beat.hit || audioData.beatDetected || onset > 0.34) && this.elapsed - this.lastBeatAt > 0.1) {
      this.lastBeatAt = this.elapsed;
      this.beatGlow = Math.max(
        this.beatGlow,
        0.76 + rhythm.bass * 0.22 + rhythm.beat.strength * 0.26 + section.climax * 0.22 + onset * 0.16,
      );
      this.triggerCameraBeat(audioData, onset);
    }
    this.beatGlow *= Math.pow(0.18, dt);
    this.stageShaderClimax = computeMineradioStageMotion({
      portrait: this.height > this.width * 1.08,
      dynamics: this.sectionDynamics,
      climax: this.sectionClimax,
      bloom: this.sectionBloom,
      beatGlow: this.beatGlow,
    }).shaderClimax;
  }

  private updateUniforms(audioData: AudioData, isPlaying: boolean, dt: number): void {
    if (!this.uniforms || !this.renderer) return;
    this.uniforms.uTime.value = this.elapsed;
    this.syncRendererQuality();
    this.syncVisualPreset();
    this.syncBackground();
    this.syncCoverResolutionGeometry();

    if (!isPlaying) {
      this.smoothBass *= Math.pow(0.91, dt * 60);
      this.smoothMid *= Math.pow(0.91, dt * 60);
      this.smoothTreble *= Math.pow(0.91, dt * 60);
      this.smoothEnergy *= Math.pow(0.91, dt * 60);
      this.beatPulse *= Math.pow(0.82, dt * 60);
    } else {
      const rhythm = audioData.rhythm;
      const section = rhythm.section;
      const bass = clamp01(rhythm.bass);
      const mid = clamp01(rhythm.mid);
      const treble = clamp01(rhythm.treble);
      const energy = clamp01(rhythm.energy);
      const climax = clamp01(section.climax);
      const bloom = clamp01(section.bloom);
      const dynamics = Math.max(0.18, section.dynamics || 0.82);
      const beatHit = rhythm.beat.hit
        ? Math.max(rhythm.pulse, 0.54 + rhythm.beat.strength * 0.32 + climax * 0.10)
        : Math.max(rhythm.pulse, climax * 0.12);

      if (beatHit > this.beatPulse + 0.05) {
        this.beatPulse = Math.min(0.86, beatHit);
      }
      this.beatPulse *= Math.pow(0.36, dt);

      const env = (prev: number, next: number, attack: number, release: number) => {
        const k = next > prev ? attack : release;
        return prev + (next - prev) * k;
      };
      const dynamicsMul = 0.92 + Math.min(1.18, dynamics) * 0.16;
      this.smoothBass = env(this.smoothBass, Math.min(1.00, (bass * 1.05 + this.beatPulse * 0.20 + climax * 0.09) * dynamicsMul), 0.34, 0.085);
      this.smoothMid = env(this.smoothMid, Math.min(0.84, (mid * 1.08 + this.beatPulse * 0.08 + bloom * 0.08 + climax * 0.04) * (0.94 + climax * 0.14)), 0.22, 0.070);
      this.smoothTreble = env(this.smoothTreble, Math.min(0.78, (treble * 1.12 + this.beatPulse * 0.06 + bloom * 0.09) * (0.94 + climax * 0.12)), 0.22, 0.065);
      this.smoothEnergy = env(this.smoothEnergy, Math.min(0.94, energy * 1.02 + this.beatPulse * 0.24 + climax * 0.18 + bloom * 0.08), 0.20, 0.070);
    }

    this.uniforms.uBass.value = this.smoothBass;
    this.uniforms.uMid.value = this.smoothMid;
    this.uniforms.uTreble.value = this.smoothTreble;
    this.uniforms.uBeat.value = this.beatPulse;
    this.uniforms.uIntensity.value += (this.settings.intensity - this.uniforms.uIntensity.value) * 0.08;
    this.uniforms.uSpread.value += (this.settings.coverSpread - this.uniforms.uSpread.value) * 0.10;
    this.uniforms.uDepth.value += (this.settings.depth - this.uniforms.uDepth.value) * 0.08;
    this.uniforms.uPointScale.value += (this.settings.pointScale - this.uniforms.uPointScale.value) * 0.08;
    this.uniforms.uCoverRes.value += (this.settings.coverResolution - this.uniforms.uCoverRes.value) * 0.10;
    this.uniforms.uSpeed.value += (this.settings.speed - this.uniforms.uSpeed.value) * 0.08;
    this.uniforms.uTwist.value += (this.settings.twist - this.uniforms.uTwist.value) * 0.08;
    this.uniforms.uColorBoost.value += (this.settings.colorBoost - this.uniforms.uColorBoost.value) * 0.08;
    this.uniforms.uScatter.value += (this.settings.scatter - this.uniforms.uScatter.value) * 0.10;
    this.uniforms.uBgFade.value += (this.settings.bgFade - this.uniforms.uBgFade.value) * 0.08;
    this.uniforms.uVinylSpin.value = this.elapsed * (isPlaying ? 0.72 : 0.24);
    const tintHex = this.settings.visualTintMode === 'custom' ? this.settings.visualTintColor : this.palette.secondary;
    this.uniforms.uTintColor.value.copy(colorToVector(tintHex, '#9db8cf', 0.18));
    this.uniforms.uTintStrength.value += ((this.settings.visualTintMode === 'custom' ? 0.52 : 0.18) - this.uniforms.uTintStrength.value) * 0.08;
    const bloomStrength = this.settings.bloom ? this.settings.bloomStrength : 0;
    this.uniforms.uBloomStrength.value += (bloomStrength - this.uniforms.uBloomStrength.value) * 0.10;
    this.uniforms.uEdgeEnabled.value = this.settings.edge ? 1 : 0;
    if (this.bloomParticles) {
      this.bloomParticles.visible = this.settings.bloom && this.uniforms.uBloomStrength.value > 0.01;
    }
    const section = audioData.rhythm.section;
    const sectionDrive = Math.max(this.sectionClimax, section.climax * 0.86);
    this.uniforms.uEnergy.value = Math.max(this.smoothEnergy, this.beatPulse * 0.30, sectionDrive * 0.58, this.sectionBloom * 0.30);
    this.uniforms.uBurstAmt.value = Math.max(this.uniforms.uBurstAmt.value * 0.91, sectionDrive * 0.64 + this.sectionBloom * 0.18);
    this.uniforms.uClimax.value += (this.stageShaderClimax - this.uniforms.uClimax.value) * 0.24;
    this.uniforms.uAlpha.value += ((isPlaying ? 0.98 : 0.86) - this.uniforms.uAlpha.value) * 0.08;
    this.uniforms.uMouseXY.value.set(this.mouseWorld.x, this.mouseWorld.y);
    this.uniforms.uMouseActive.value = this.mouseActive ? 1 : 0;
    this.uniforms.uPixel.value = this.renderer.getPixelRatio();
  }

  private syncVisualPreset(): void {
    if (!this.uniforms || !this.camera) return;
    const preset = this.settings.preset;
    this.uniforms.uPreset.value = visualPresetIndex(preset);
    if (preset === this.previousPreset) return;
    this.previousPreset = preset;
    this.uniforms.uBurstAmt.value = Math.max(this.uniforms.uBurstAmt.value, preset === 'wallpaper' ? 0.05 : 0.15);
    this.uniforms.uScatter.value = Math.max(
      this.uniforms.uScatter.value,
      this.settings.scatter + (preset === 'wallpaper' ? 0.008 : (preset === 'vinyl' ? 0.024 : 0.12)),
    );
    const targetZ = preset === 'orbit'
      ? 7.0
      : preset === 'void'
        ? 8.0
        : preset === 'vinyl'
          ? 6.5
          : preset === 'wallpaper'
            ? 9.4
            : preset === 'tunnel'
              ? 6.2
              : 6.6;
    this.camera.position.z += (targetZ - this.camera.position.z) * 0.55;
    this.gestureRotation.x *= 0.82;
    this.gestureRotation.y *= 0.82;
    this.triggerRipple(this.elapsed * 13.7 + visualPresetIndex(preset) * 19.1, 0.62);
  }

  private syncRendererQuality(): void {
    if (!this.renderer) return;
    const ratio = Math.min(window.devicePixelRatio || 1, maxPixelRatioForQuality(this.settings.performanceQuality));
    if (Math.abs(this.renderer.getPixelRatio() - ratio) > 0.01) {
      this.renderer.setPixelRatio(ratio);
      this.renderer.setSize(this.width, this.height, false);
    }
    if (this.uniforms) {
      const particleDim = this.settings.performanceQuality === 'eco'
        ? 0.74
        : this.settings.performanceQuality === 'balanced'
          ? 0.88
          : this.settings.performanceQuality === 'ultra'
            ? 1.08
            : 1;
      this.uniforms.uParticleDim.value += (particleDim - this.uniforms.uParticleDim.value) * 0.08;
    }
  }

  private syncBackground(): void {
    if (!this.renderer) return;
    const hex = this.settings.backgroundColorMode === 'custom' ? this.settings.backgroundColor : this.palette.background;
    const { r, g, b } = hexToRgb(hex || '#000000');
    const color = new THREE.Color(r / 255, g / 255, b / 255);
    this.renderer.setClearColor(color, this.settings.backgroundOpacity);
  }

  private syncCoverResolutionGeometry(): void {
    const nextGrid = mineradioCoverParticleGridForResolution(this.settings.coverResolution);
    if (nextGrid !== this.coverGrid && this.particles && this.bloomParticles) {
      const previousGeometry = this.coverGeometry;
      this.coverGrid = nextGrid;
      this.coverGeometry = buildCoverParticleGeometry(nextGrid);
      this.particles.geometry = this.coverGeometry;
      this.bloomParticles.geometry = this.coverGeometry;
      previousGeometry?.dispose();
    }
    const nextTextureSize = coverTextureSizeForResolution(this.settings.coverResolution);
    if (nextTextureSize !== this.coverTextureSize) {
      this.coverTextureSize = nextTextureSize;
      this.loadCover();
    }
  }

  private updateStageTransform(dt: number): void {
    if (!this.stageGroup || !this.coverGroup || !this.lyricMesh || !this.lyricGlow) return;
    this.cameraPunch *= Math.pow(this.settings.cinema ? 0.08 : 0.04, dt);
    this.cameraThetaKick *= Math.pow(0.05, dt);
    this.cameraPhiKick *= Math.pow(0.05, dt);
    this.cameraRadiusKick *= Math.pow(0.05, dt);
    this.cameraRollKick *= Math.pow(0.05, dt);
    if (this.camera) {
      const shake = this.settings.cinema ? this.settings.cinemaShake : 0;
      const dynamicCamera = this.settings.shelfCameraMode === 'dynamic' ? 1 : 0;
      const beatShake = shake * (this.beatGlow * 0.028 + this.sectionClimax * 0.020);
      const cameraX =
        Math.sin(this.elapsed * 0.52) * 0.030 * dynamicCamera +
        Math.sin(this.elapsed * 9.1) * beatShake +
        this.cameraThetaKick * shake * 28;
      const cameraY =
        0.02 +
        Math.cos(this.elapsed * 0.43) * 0.020 * dynamicCamera +
        Math.cos(this.elapsed * 8.4) * beatShake * 0.55 +
        this.cameraPhiKick * shake * 24;
      const cameraZ =
        6.6 -
        this.sectionClimax * 0.10 * dynamicCamera -
        this.cameraRadiusKick * shake * 1.18;
      const focusEase = Math.max(0.055, 0.09 + this.cameraPunch * 0.12);
      const radiusEase = Math.max(0.055, 0.07 + this.cameraPunch * 0.12);
      this.camera.position.x += (cameraX - this.camera.position.x) * focusEase;
      this.camera.position.y += (cameraY - this.camera.position.y) * focusEase;
      this.camera.position.z += (cameraZ - this.camera.position.z) * radiusEase;
      this.camera.lookAt(0, 0, 0);
      this.camera.rotation.z += this.cameraRollKick * shake;
      const cameraPunch = Math.max(this.cameraPunch * 0.54, this.cameraRadiusKick * 0.16) * shake;
      const targetFov = 42 - cameraPunch * 2.35;
      const fovEase = targetFov < this.camera.fov ? 0.24 : 0.12;
      this.camera.fov += (targetFov - this.camera.fov) * fovEase;
      this.camera.updateProjectionMatrix();
    }
    const rotationEase = this.rotationReturn.active ? 0.22 : 0.055;
    this.coverGroup.rotation.y += (this.gestureRotation.y - this.coverGroup.rotation.y) * rotationEase;
    this.coverGroup.rotation.x += (this.gestureRotation.x - this.coverGroup.rotation.x) * rotationEase;
    this.coverGroup.rotation.z = Math.sin(this.elapsed * 0.12) * 0.012;
    const portrait = this.height > this.width * 1.08;
    const stageMotion = computeMineradioStageMotion({
      portrait,
      dynamics: this.sectionDynamics,
      climax: this.sectionClimax,
      bloom: this.sectionBloom,
      beatGlow: this.beatGlow,
    });
    this.stageShaderClimax = stageMotion.shaderClimax;
    this.coverGroup.scale.setScalar(stageMotion.coverScale);
    this.coverGroup.position.set(0, stageMotion.coverY, stageMotion.coverZ);
    const lyricX = (portrait ? 0 : 0.02) + this.settings.lyricOffsetX;
    const lyricBaseY = (portrait ? -0.10 : 0.02) + this.settings.lyricOffsetY;
    const lyricFloatY = lyricBaseY + Math.sin(this.elapsed * 0.55) * 0.050 + Math.sin(this.elapsed * 1.35) * 0.014;
    const lyricHoverDistance = Math.max(
      0.14,
      0.42 + this.settings.lyricOffsetZ * 0.42 + Math.cos(this.elapsed * 0.48) * 0.035 + stageMotion.lyricZOffset * 0.26,
    );
    this.lyricCoverLocalPosition.set(lyricX, lyricFloatY, lyricHoverDistance);
    this.coverGroup.localToWorld(this.lyricCoverWorldPosition.copy(this.lyricCoverLocalPosition));
    this.lyricStagePosition.copy(this.lyricCoverWorldPosition);
    this.stageGroup.worldToLocal(this.lyricStagePosition);
    this.coverGroup.getWorldQuaternion(this.lyricCoverWorldQuaternion);
    this.lyricMesh.position.copy(this.lyricStagePosition);
    this.lyricShadow?.position.set(this.lyricStagePosition.x, this.lyricStagePosition.y - 0.03, this.lyricStagePosition.z - 0.035);
    this.lyricGlow.position.set(this.lyricStagePosition.x, this.lyricStagePosition.y, this.lyricStagePosition.z - 0.075);
    this.lyricSun?.position.set(this.lyricStagePosition.x, this.lyricStagePosition.y + 0.02, this.lyricStagePosition.z - 0.16);
    this.lyricSparks?.position.set(this.lyricStagePosition.x, this.lyricStagePosition.y, this.lyricStagePosition.z + 0.10);
    this.lyricStarRiver?.position.set(
      this.lyricStagePosition.x,
      this.lyricStagePosition.y + 0.18 + Math.sin(this.elapsed * 0.44) * 0.035 + Math.sin(this.elapsed * 0.91 + 1.7) * 0.018,
      this.lyricStagePosition.z + Math.cos(this.elapsed * 0.31) * 0.06,
    );
    this.lyricTiltQuaternion.setFromEuler(new THREE.Euler(
      THREE.MathUtils.degToRad(this.settings.lyricTiltX),
      THREE.MathUtils.degToRad(this.settings.lyricTiltY),
      0,
      'XYZ',
    ));
    const lyricQuaternion = this.lyricCoverWorldQuaternion.clone().multiply(this.lyricTiltQuaternion);
    this.lyricMesh.quaternion.copy(lyricQuaternion);
    this.lyricShadow?.quaternion.copy(lyricQuaternion);
    this.lyricGlow.quaternion.copy(lyricQuaternion);
    this.lyricSun?.quaternion.copy(lyricQuaternion);
    this.lyricSparks?.quaternion.copy(lyricQuaternion);
    this.lyricStarRiver?.quaternion.copy(lyricQuaternion);
    if (this.lyricStarRiver) this.lyricStarRiver.rotation.z += Math.sin(this.elapsed * 0.22) * 0.012;
    const lyricScale = stageMotion.lyricScale * this.settings.lyricScale;
    this.lyricMesh.scale.setScalar(lyricScale);
    this.lyricShadow?.scale.set(lyricScale * 1.03, lyricScale * 1.12, 1);
    this.lyricGlow.scale.setScalar(lyricScale * 1.08);
    this.lyricSun?.scale.set(lyricScale * 1.05, lyricScale * 0.92, 1);
    this.lyricSparks?.scale.setScalar(lyricScale);
    this.lyricStarRiver?.scale.setScalar(lyricScale);
    this.updateShelfTransform();
  }

  private updateShelfTransform(): void {
    if (!this.shelfGroup) return;
    if (this.shelfAllItems.length) {
      this.shelfCenterTarget = this.clampShelfCenter(this.shelfCenterTarget);
      this.shelfCenterSmooth += (this.shelfCenterTarget - this.shelfCenterSmooth) * 0.16;
      if (Math.abs(this.shelfCenterSmooth - this.shelfCenterTarget) < 0.001) {
        this.shelfCenterSmooth = this.shelfCenterTarget;
      }
    }
    this.ensureShelfCards();
    const hasSongs = this.shelfCards.length > 0;
    const enabled = this.settings.shelf !== 'off' && hasSongs;
    this.shelfGroup.visible = enabled;
    if (!enabled) return;

    const portrait = this.height > this.width * 1.08;
    const narrow = !portrait && this.width < 980;
    const mode = this.settings.shelf;
    const dynamic = this.settings.shelfCameraMode === 'dynamic';
    const autoDim = this.settings.shelfPresence === 'auto' && !this.mouseActive ? 0.42 : 1;
    const baseOpacity = this.settings.shelfOpacity * autoDim;
    const sideX = (portrait ? 1.56 : (narrow ? 2.48 : 3.18)) + this.settings.shelfOffsetX;
    const sideY = this.settings.shelfOffsetY;
    const sideXStep = portrait ? 0.018 : 0.040;
    const sideYStep = portrait ? 0.52 : 0.68;
    const sideZ = (portrait ? 0.78 : 0.86) + this.settings.shelfOffsetZ;
    const sideZStep = portrait ? 0.118 : 0.170;
    const sideEntryX = portrait ? 0.38 : 0.82;
    const sideScale = (portrait ? 0.70 : (narrow ? 0.86 : 1.0)) * this.settings.shelfSize;
    const sideRotY = (portrait ? 0.12 : 0.28) + THREE.MathUtils.degToRad(this.settings.shelfAngleY);
    const sideRotX = portrait ? 0.022 : 0.042;
    const stageXStep = portrait ? 0.92 : (narrow ? 1.22 : 1.55);
    const stageY = (portrait ? -2.46 : -2.20) + this.settings.shelfOffsetY;
    const stageZ = (portrait ? 0.84 : 1.0) + this.settings.shelfOffsetZ;
    const stageScale = (portrait ? 0.72 : (narrow ? 0.86 : 1.0)) * this.settings.shelfSize;
    const pulse = dynamic ? Math.sin(this.elapsed * 0.8) * 0.025 + this.beatGlow * 0.030 : 0;

    const groupTargetRotX = mode === 'side' ? (this.coverGroup?.rotation.x || 0) * 0.075 : 0;
    const groupTargetRotY = mode === 'side' ? (this.coverGroup?.rotation.y || 0) * 0.075 : 0;
    this.shelfGroup.position.set(mode === 'stage' ? this.settings.shelfOffsetX * 0.10 : 0, mode === 'stage' ? Math.sin(this.elapsed * 0.3) * 0.04 : 0, 0);
    this.shelfGroup.rotation.x += (groupTargetRotX - this.shelfGroup.rotation.x) * 0.075;
    this.shelfGroup.rotation.y += (groupTargetRotY - this.shelfGroup.rotation.y) * 0.075;
    this.shelfGroup.rotation.z += (0 - this.shelfGroup.rotation.z) * 0.075;

    this.shelfCards.forEach(card => {
      card.relativeIndex = card.index - this.shelfCenterSmooth;
      const rel = card.relativeIndex;
      const absRel = Math.abs(rel);
      const material = card.mesh.material;
      card.mesh.renderOrder = 60 + Math.round((SHELF_VISIBLE_RADIUS + 1 - Math.min(absRel, SHELF_VISIBLE_RADIUS + 1)) * 10);
      const nextDof = Math.max(0, Math.min(1, (absRel - 0.45) / 3.2));
      const nextDofBucket = Math.round(nextDof * 5);
      if (card.dofBucket !== nextDofBucket) {
        card.dofBucket = nextDofBucket;
        card.dofBlur = nextDof;
        card.drawKey = '';
      }
      const isCenter = absRel < 0.5;
      if (card.isCenter !== isCenter) {
        card.isCenter = isCenter;
        card.drawKey = '';
      }
      card.selected = isCenter;
      card.fxPulse = Math.max(card.fxPulse * Math.pow(0.46, 1 / 60), isCenter ? pulse : 0);
      this.drawShelfCard(card);

      if (mode === 'stage') {
        const pxStage = this.settings.shelfOffsetX + rel * stageXStep;
        const pzStage = isCenter ? stageZ : stageZ - Math.min(2.0, absRel) * 0.55;
        const scaleStage = (isCenter ? 1.20 : Math.max(0.45, 1.0 - absRel * 0.22)) * (1 + card.fxPulse * 0.060) * stageScale;
        card.group.position.set(
          pxStage,
          stageY + Math.cos(this.elapsed * 0.42 + rel) * 0.025 * Number(dynamic),
          pzStage,
        );
        card.group.rotation.set(
          0.10 - absRel * 0.04,
          -rel * 0.22,
          0,
        );
        card.group.scale.setScalar(scaleStage);
        const op = isCenter ? 1.0 : Math.max(0.18, 1.0 - absRel * 0.32);
        material.opacity += (Math.min(1, op + card.fxPulse * 0.10) * baseOpacity - material.opacity) * 0.14;
        material.color.setScalar(1);
      } else {
        const reveal = 1;
        const breathPulse = dynamic ? autoDim * (0.5 + 0.5 * Math.sin(this.elapsed * 1.22 + card.index * 0.74)) : 0;
        const liftTarget = isCenter ? 1 : 0;
        card.floatMix += (liftTarget - card.floatMix) * (liftTarget > card.floatMix ? 0.20 : 0.13);
        if (!liftTarget && card.floatMix < 0.004) card.floatMix = 0;
        const lift = card.floatMix;
        let px = sideX + absRel * sideXStep + (1 - reveal) * sideEntryX;
        let py = sideY - rel * sideYStep + (1 - reveal) * (rel < 0 ? -0.18 : 0.18);
        let pz = sideZ - absRel * sideZStep - (1 - reveal) * 0.20;
        px -= lift * (portrait ? 0.065 : 0.145);
        py += lift * (portrait ? 0.075 : 0.105);
        pz += lift * 0.220;
        py += Math.sin(this.elapsed * 0.92 + card.index * 0.64) * 0.052 * autoDim * Math.max(0.20, 1 - absRel * 0.16);
        pz += Math.cos(this.elapsed * 0.78 + card.index * 0.52) * 0.030 * autoDim * Math.max(0, 1 - absRel * 0.16);
        const scale = (isCenter ? 1.12 : Math.max(0.55, 1.04 - absRel * 0.14)) *
          (1 + card.fxPulse * 0.056 + breathPulse * 0.026 + lift * 0.075) *
          sideScale;
        card.group.position.set(
          px,
          py,
          pz,
        );
        card.group.rotation.set(
          -rel * sideRotX,
          sideRotY + (1 - reveal) * 0.16,
          0,
        );
        card.group.scale.setScalar(scale);
        const opacity = isCenter ? 1.0 : Math.max(0.22, 1.0 - absRel * 0.30);
        material.opacity += (Math.min(1, opacity * baseOpacity + card.fxPulse * 0.10 + breathPulse * 0.035) - material.opacity) * 0.14;
        material.color.setScalar(0.96 + lift * 0.04);
      }
    });
  }

  private updateLyricTexture(): void {
    if (!this.lyricTexture || !this.lyricShadowTexture || !this.lyricGlowTexture || !this.lyricMesh || !this.lyricGlow) return;
    const text = this.currentText || this.songInfo.title || 'Mineradio';
    const introBucket = Math.round(Math.min(this.lineAge, INTRO_FADE_SECONDS) * 20);
    const key = [
      text,
      Math.round(this.currentProgress * 100),
      introBucket,
      this.settings.lyricColorMode,
      this.settings.lyricColor,
      this.settings.lyricHighlightMode,
      this.settings.lyricHighlightColor,
      this.settings.lyricGlowLinked,
      this.settings.lyricGlowColor,
      this.settings.lyricFont,
      this.settings.lyricLetterSpacing,
      this.settings.lyricLineHeight,
      this.settings.lyricWeight,
    ].join('|');
    if (key === this.lyricTextureKey) return;
    this.lyricTextureKey = key;
    const { textCanvas, shadowCanvas, glowCanvas, aspect } = this.makeLyricCanvases(text, this.currentProgress);
    this.lyricTexture.image = textCanvas;
    this.lyricTexture.needsUpdate = true;
    this.lyricShadowTexture.image = shadowCanvas;
    this.lyricShadowTexture.needsUpdate = true;
    this.lyricGlowTexture.image = glowCanvas;
    this.lyricGlowTexture.needsUpdate = true;
    const worldW = this.height > this.width * 1.08 ? 5.0 : 5.35;
    const worldH = worldW / aspect;
    this.lyricMesh.geometry.dispose();
    this.lyricMesh.geometry = new THREE.PlaneGeometry(worldW, worldH, 1, 1);
    if (this.lyricShadow) {
      this.lyricShadow.geometry.dispose();
      this.lyricShadow.geometry = new THREE.PlaneGeometry(worldW * 1.05, worldH * 1.22, 1, 1);
    }
    this.lyricGlow.geometry.dispose();
    this.lyricGlow.geometry = new THREE.PlaneGeometry(worldW * 1.08, worldH * 1.2, 1, 1);
    if (this.lyricSun) {
      this.lyricSun.geometry.dispose();
      this.lyricSun.geometry = new THREE.PlaneGeometry(worldW * 1.18, Math.max(worldH * 1.85, 1.05), 1, 1);
    }
    this.rebuildLyricParticleLayout(worldW, worldH);
  }

  private rebuildLyricParticleLayout(worldW: number, worldH: number): void {
    if (!this.lyricSparks || !this.lyricSparkBasePositions) return;
    const position = this.lyricSparks.geometry.getAttribute('position') as THREE.BufferAttribute;
    const arr = position.array as Float32Array;
    const w = Math.max(2.6, worldW * 0.98);
    const h = Math.max(0.55, worldH * 1.35);
    for (let i = 0; i < LYRIC_SPARK_COUNT; i += 1) {
      const angle = seededUnit(i * 17.23 + 8.4) * Math.PI * 2;
      const band = Math.pow(seededUnit(i * 11.31 + 4.8), 0.64);
      const sideBias = seededUnit(i * 7.13 + 1.7);
      const radiusX = w * (0.36 + band * 0.24);
      const radiusY = h * (0.28 + seededUnit(i * 5.91 + 9.6) * 0.34);
      const x = Math.cos(angle) * radiusX + (sideBias - 0.5) * w * 0.22;
      const y = Math.sin(angle) * radiusY + (seededUnit(i * 3.61 + 2.9) - 0.5) * h * 0.18;
      const z = (seededUnit(i * 19.19 + 6.2) - 0.5) * 0.26;
      this.lyricSparkBasePositions[i * 3] = x;
      this.lyricSparkBasePositions[i * 3 + 1] = y;
      this.lyricSparkBasePositions[i * 3 + 2] = z;
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    position.needsUpdate = true;
    this.lyricStarRiverSize.width = Math.max(2.25, Math.min(7.2, worldW * 1.12 + 0.8));
    this.lyricStarRiverSize.height = Math.max(0.52, Math.min(1.35, worldH * 1.85 + 0.18));
  }

  private updateLyricEffects(audioData: AudioData, dt: number, isPlaying: boolean): void {
    const rhythm = audioData.rhythm;
    const section = rhythm.section;
    const bass = clamp01(Math.max(audioData.bassLevel, rhythm.bass));
    const mid = clamp01(Math.max(audioData.midLevel, rhythm.mid));
    const lyricGlowStrength = this.settings.lyricGlow ? Math.min(0.85, Math.max(0, this.settings.lyricGlowStrength)) : 0;
    const glowDrive = Math.min(1.7, Math.max(0, lyricGlowStrength / 0.50));
    const playbackDrive = isPlaying ? 1 : 0.42;
    const beatDrive = this.settings.lyricGlowBeat && lyricGlowStrength > 0 ? this.beatGlow : 0;
    const solar = clamp01(
      this.sunEnergy * 0.94 +
      beatDrive * 0.52 +
      audioData.energy * 0.10 +
      section.bloom * 0.30 +
      section.climax * 0.20,
    ) * glowDrive * playbackDrive;
    const lyricVisible = Boolean(this.currentText || this.songInfo.title);
    if (this.lyricShadow?.material) {
      const material = this.lyricShadow.material as THREE.MeshBasicMaterial;
      const target = lyricVisible ? Math.min(0.86, 0.58 + solar * 0.10 + beatDrive * 0.045) : 0;
      material.opacity += (target - material.opacity) * (target > material.opacity ? 0.12 : 0.08);
    }
    if (this.lyricGlow?.material) {
      const material = this.lyricGlow.material as THREE.MeshBasicMaterial;
      const target = lyricVisible && lyricGlowStrength > 0
        ? Math.min(0.92, (0.075 + solar * 0.34 + beatDrive * 0.16) * Math.min(3.0, glowDrive))
        : 0;
      material.opacity += (target - material.opacity) * (target > material.opacity ? 0.095 : 0.055);
      material.color.copy(colorToVector(this.palette.glow, '#9cffdf', 0.36)).lerp(colorToVector(this.palette.highlight, '#fff7d2', 0.42), solar * 0.45);
    }
    if (this.lyricSun?.material) {
      const material = this.lyricSun.material as THREE.MeshBasicMaterial;
      const target = lyricVisible && lyricGlowStrength > 0
        ? Math.min(0.88, (Math.pow(Math.min(1.35, solar), 1.08) * 0.28 + beatDrive * 0.20) * Math.min(2.4, glowDrive))
        : 0;
      material.opacity += (target - material.opacity) * 0.055;
      material.color.copy(colorToVector(this.palette.highlight, '#fff7d2', 0.36)).lerp(new THREE.Color(1, 0.84, 0.42), solar * 0.55);
      const beatScale = beatDrive * 0.24;
      this.lyricSun.scale.set(
        this.lyricSun.scale.x * (0.82 + solar * 0.36 + beatScale + Math.sin(this.elapsed * 1.6) * solar * 0.018),
        this.lyricSun.scale.y * (0.60 + solar * 0.34 + beatScale * 0.72 + Math.cos(this.elapsed * 1.25) * solar * 0.020),
        1,
      );
    }
    if (this.lyricStarRiver?.material) {
      const material = this.lyricStarRiver.material as THREE.ShaderMaterial;
      const uniforms = material.uniforms;
      const targetOpacity = lyricVisible ? Math.max(0.16, Math.min(0.86, 0.22 + solar * 0.58 + beatDrive * 0.12)) : 0;
      uniforms.uOpacity.value += (targetOpacity - uniforms.uOpacity.value) * (targetOpacity > uniforms.uOpacity.value ? 0.10 : 0.055);
      uniforms.uWidth.value += (this.lyricStarRiverSize.width - uniforms.uWidth.value) * Math.min(1, dt * 5.2);
      uniforms.uHeight.value += (this.lyricStarRiverSize.height - uniforms.uHeight.value) * Math.min(1, dt * 4.6);
      uniforms.uColorA.value.copy(colorToVector(this.palette.secondary, '#9cffdf', 0.42));
      uniforms.uColorB.value.copy(colorToVector(this.palette.highlight, '#fff7d2', 0.46));
      this.lyricStarRiver.visible = uniforms.uOpacity.value > 0.01 || lyricVisible;
    }
    if (this.lyricSparks?.material && this.lyricSparkBasePositions) {
      const material = this.lyricSparks.material as THREE.ShaderMaterial;
      const sparkTarget = lyricVisible && lyricGlowStrength > 0 && this.settings.lyricGlowParticles
        ? Math.min(0.42, (0.10 + solar * 0.14 + beatDrive * 0.10) * Math.min(1.6, glowDrive))
        : 0;
      material.uniforms.uOpacity.value += (sparkTarget - material.uniforms.uOpacity.value) * (sparkTarget > material.uniforms.uOpacity.value ? 0.13 : 0.075);
      const sizeTarget = this.settings.lyricGlowParticles ? 0.050 + solar * 0.016 + beatDrive * 0.026 + bass * 0.008 : 0.035;
      material.uniforms.uSize.value += (sizeTarget - material.uniforms.uSize.value) * 0.12;
      material.uniforms.uPixel.value = this.renderer?.getPixelRatio() || 1;
      material.uniforms.uColor.value.copy(colorToVector(this.palette.highlight, '#fff7d2', 0.46)).lerp(new THREE.Color(1, 0.72, 0.36), solar * 0.22);
      this.lyricSparks.visible = material.uniforms.uOpacity.value > 0.015;
      const attr = this.lyricSparks.geometry.getAttribute('position') as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      this.lyricSparks.rotation.z += (0.0009 + beatDrive * 0.0007) * (dt * 60);
      this.lyricSparks.rotation.x = Math.sin(this.elapsed * 0.12) * 0.012;
      for (let i = 0; i < LYRIC_SPARK_COUNT; i += 1) {
        const s = i * 12.989;
        const particleBeat = beatDrive;
        const dustBreath = 0.62 + 0.38 * Math.sin(this.elapsed * (0.32 + (i % 7) * 0.025) + s);
        arr[i * 3] =
          this.lyricSparkBasePositions[i * 3] +
          Math.sin(this.elapsed * (0.18 + (i % 5) * 0.025) + s) * (0.045 + bass * 0.030 + particleBeat * 0.052) +
          Math.cos(this.elapsed * 0.11 + s) * 0.018 * dustBreath;
        arr[i * 3 + 1] =
          this.lyricSparkBasePositions[i * 3 + 1] +
          Math.cos(this.elapsed * (0.16 + (i % 6) * 0.024) + s) * (0.042 + mid * 0.026 + particleBeat * 0.046) +
          Math.sin(this.elapsed * 0.13 + s) * 0.016 * dustBreath;
        arr[i * 3 + 2] =
          this.lyricSparkBasePositions[i * 3 + 2] +
          Math.sin(this.elapsed * (0.24 + (i % 4) * 0.035) + s) * (0.036 + particleBeat * 0.028);
      }
      attr.needsUpdate = true;
    }
  }

  private makeLyricCanvases(
    text: string,
    progress: number,
  ): { textCanvas: HTMLCanvasElement; shadowCanvas: HTMLCanvasElement; glowCanvas: HTMLCanvasElement; aspect: number } {
    const width = 2048;
    const height = 460;
    const textCanvas = document.createElement('canvas');
    const shadowCanvas = document.createElement('canvas');
    const glowCanvas = document.createElement('canvas');
    textCanvas.width = shadowCanvas.width = glowCanvas.width = width;
    textCanvas.height = shadowCanvas.height = glowCanvas.height = height;
    const ctx = textCanvas.getContext('2d');
    const shadowCtx = shadowCanvas.getContext('2d');
    const glowCtx = glowCanvas.getContext('2d');
    if (!ctx || !shadowCtx || !glowCtx) return { textCanvas, shadowCanvas, glowCanvas, aspect: width / height };
    const lines = splitStageLyricText(text, 23).filter(Boolean).slice(0, 2);
    if (!lines.length) lines.push(text || 'Mineradio');
    const fontWeight = this.settings.lyricFont === 'stone-song'
      ? 900
      : Math.round(this.settings.lyricWeight / 50) * 50;
    const fontKey = this.settings.lyricFont;
    let fontSize = 190;
    for (; fontSize >= 86; fontSize -= 4) {
      ctx.font = lyricFont(fontSize, fontWeight, fontKey);
      const spacing = this.settings.lyricLetterSpacing * fontSize;
      const maxLineWidth = Math.max(...lines.map(line => measureTextWithLetterSpacing(ctx, line, spacing)));
      const totalHeight = lines.length * fontSize * 1.05 * this.settings.lyricLineHeight;
      if (maxLineWidth <= width * 0.88 && totalHeight <= height * 0.82) break;
    }
    const letterSpacing = this.settings.lyricLetterSpacing * fontSize;
    const lineHeight = fontSize * 1.05 * this.settings.lyricLineHeight;
    const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2 + fontSize * 0.02;
    ctx.font = lyricFont(fontSize, fontWeight, fontKey);
    const lineWidths = lines.map(line => measureTextWithLetterSpacing(ctx, line, letterSpacing));
    const maxLineWidth = Math.max(...lineWidths, width * 0.36);
    const intro = smoothstep(this.lineAge / INTRO_FADE_SECONDS);
    const alpha = 0.18 + intro * 0.82;
    const primaryHex = this.settings.lyricColorMode === 'custom' ? this.settings.lyricColor : this.palette.primary;
    const highlightHex = this.settings.lyricHighlightMode === 'custom' ? this.settings.lyricHighlightColor : this.palette.highlight;
    const glowHex = this.settings.lyricGlowLinked ? highlightHex : this.settings.lyricGlowColor;
    const primary = rgba(primaryHex, 1);
    const highlight = rgba(highlightHex, 1);
    const glow = rgba(glowHex, 1);

    const drawShadowLayer = (): void => {
      const centerY = startY + ((lines.length - 1) * lineHeight) / 2 + fontSize * 0.20;
      shadowCtx.clearRect(0, 0, width, height);
      shadowCtx.save();
      shadowCtx.globalAlpha = alpha;
      shadowCtx.filter = 'blur(28px)';
      const plate = shadowCtx.createRadialGradient(
        width / 2,
        centerY,
        0,
        width / 2,
        centerY,
        Math.max(maxLineWidth * 0.58, fontSize * 3.2),
      );
      plate.addColorStop(0, 'rgba(0,0,0,0.68)');
      plate.addColorStop(0.42, 'rgba(0,0,0,0.44)');
      plate.addColorStop(0.78, 'rgba(0,0,0,0.13)');
      plate.addColorStop(1, 'rgba(0,0,0,0)');
      shadowCtx.fillStyle = plate;
      shadowCtx.beginPath();
      shadowCtx.ellipse(width / 2, centerY + fontSize * 0.05, maxLineWidth * 0.55, fontSize * 0.50, -0.02, 0, Math.PI * 2);
      shadowCtx.fill();
      shadowCtx.filter = 'none';
      shadowCtx.textAlign = 'center';
      shadowCtx.textBaseline = 'middle';
      shadowCtx.font = lyricFont(fontSize, fontWeight, fontKey);
      shadowCtx.shadowColor = 'rgba(0,0,0,0.95)';
      shadowCtx.shadowBlur = 38;
      shadowCtx.lineWidth = Math.max(14, fontSize * 0.13);
      shadowCtx.strokeStyle = 'rgba(0,0,0,0.62)';
      shadowCtx.fillStyle = 'rgba(0,0,0,0.42)';
      for (let i = 0; i < lines.length; i += 1) {
        const y = startY + i * lineHeight + fontSize * 0.12;
        drawTextWithLetterSpacing(shadowCtx, lines[i], width / 2, y, letterSpacing, true);
        drawTextWithLetterSpacing(shadowCtx, lines[i], width / 2, y, letterSpacing, false);
      }
      shadowCtx.restore();
    };

    const drawTextLayer = (target: CanvasRenderingContext2D, blur: number, opacity: number): void => {
      target.clearRect(0, 0, width, height);
      target.save();
      target.textAlign = 'center';
      target.textBaseline = 'middle';
      target.font = lyricFont(fontSize, fontWeight, fontKey);
      target.globalAlpha = alpha * opacity;
      target.shadowColor = glow;
      target.shadowBlur = blur;
      for (let i = 0; i < lines.length; i += 1) {
        const y = startY + i * lineHeight;
        target.lineWidth = Math.max(7, fontSize * 0.06);
        target.strokeStyle = 'rgba(0,0,0,0.34)';
        drawTextWithLetterSpacing(target, lines[i], width / 2, y, letterSpacing, true);
        target.fillStyle = primary;
        drawTextWithLetterSpacing(target, lines[i], width / 2, y, letterSpacing, false);
      }
      target.restore();
    };

    drawShadowLayer();
    drawTextLayer(glowCtx, 58 + this.sunEnergy * 44, 0.82);
    glowCtx.save();
    glowCtx.globalCompositeOperation = 'lighter';
    glowCtx.textAlign = 'center';
    glowCtx.textBaseline = 'middle';
    glowCtx.font = lyricFont(fontSize, fontWeight, fontKey);
    glowCtx.shadowColor = rgba(this.palette.highlight, 0.74);
    glowCtx.shadowBlur = 84 + this.sunEnergy * 52;
    glowCtx.globalAlpha = alpha * (0.22 + this.sunEnergy * 0.20);
    glowCtx.fillStyle = rgba(this.palette.highlight, 1);
    for (let i = 0; i < lines.length; i += 1) {
      drawTextWithLetterSpacing(glowCtx, lines[i], width / 2, startY + i * lineHeight, letterSpacing, false);
    }
    glowCtx.restore();
    drawTextLayer(ctx, 26 + this.sunEnergy * 24, 1);
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = lyricFont(fontSize, fontWeight, fontKey);
    ctx.globalCompositeOperation = 'lighter';
    ctx.shadowColor = rgba(this.palette.highlight, 0.72);
    ctx.shadowBlur = 24 + this.sunEnergy * 26;
    ctx.fillStyle = highlight;
    const fillWidth = width * clamp01(progress);
    ctx.beginPath();
    ctx.rect(0, 0, fillWidth, height);
    ctx.clip();
    for (let i = 0; i < lines.length; i += 1) {
      drawTextWithLetterSpacing(ctx, lines[i], width / 2, startY + i * lineHeight, letterSpacing, false);
    }
    ctx.restore();
    return { textCanvas, shadowCanvas, glowCanvas, aspect: width / height };
  }
}

export default MineradioPlugin;
