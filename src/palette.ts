export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export interface MineradioPalette {
  deep: string;
  mid: string;
  background: string;
  primary: string;
  secondary: string;
  highlight: string;
  glow: string;
  warm: string;
}

const PALETTES: MineradioPalette[] = [
  {
    deep: '#05080d',
    mid: '#071821',
    background: '#000000',
    primary: '#d6f8ff',
    secondary: '#9cffdf',
    highlight: '#fff0b8',
    glow: '#8fe9ff',
    warm: '#ffd67a',
  },
  {
    deep: '#070710',
    mid: '#171023',
    background: '#000000',
    primary: '#f3e8ff',
    secondary: '#a7f3d0',
    highlight: '#fde68a',
    glow: '#c4b5fd',
    warm: '#fb7185',
  },
  {
    deep: '#07100d',
    mid: '#0f2018',
    background: '#000000',
    primary: '#eafff4',
    secondary: '#86efac',
    highlight: '#fef3c7',
    glow: '#5eead4',
    warm: '#facc15',
  },
  {
    deep: '#0b0710',
    mid: '#25101b',
    background: '#000000',
    primary: '#ffe4ed',
    secondary: '#f0abfc',
    highlight: '#fff7d6',
    glow: '#fb7185',
    warm: '#f59e0b',
  },
];

export function hashText(text: string): number {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function getMineradioPalette(title = '', artist = ''): MineradioPalette {
  const seed = hashText(`${title}|${artist}`);
  return PALETTES[seed % PALETTES.length];
}

export function hexToRgb(hex: string): RgbColor {
  const normalized = String(hex || '').replace('#', '').trim();
  const full = normalized.length === 3
    ? normalized.split('').map(char => char + char).join('')
    : normalized.padEnd(6, '0').slice(0, 6);
  const value = Number.parseInt(full, 16);
  if (!Number.isFinite(value)) return { r: 255, g: 255, b: 255 };
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

export function rgba(hex: string, alpha: number): string {
  const c = hexToRgb(hex);
  return `rgba(${c.r}, ${c.g}, ${c.b}, ${Math.max(0, Math.min(1, alpha))})`;
}

export function mixHex(a: string, b: string, amount: number): string {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  const t = Math.max(0, Math.min(1, amount));
  const r = Math.round(ca.r + (cb.r - ca.r) * t);
  const g = Math.round(ca.g + (cb.g - ca.g) * t);
  const blue = Math.round(ca.b + (cb.b - ca.b) * t);
  return `#${[r, g, blue].map(v => v.toString(16).padStart(2, '0')).join('')}`;
}
