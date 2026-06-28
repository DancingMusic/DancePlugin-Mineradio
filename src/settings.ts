import type { DancePluginConfig } from '@dancingmusic/plugin-sdk';

export type MineradioShelfMode = 'off' | 'side' | 'stage';
export type MineradioShelfCameraMode = 'dynamic' | 'static';
export type MineradioShelfPresence = 'auto' | 'always';
export type MineradioCameraMode = 'off' | 'gesture';
export type MineradioVisualPreset = 'cover' | 'tunnel' | 'orbit' | 'void' | 'vinyl' | 'wallpaper';
export type MineradioLyricColorMode = 'auto' | 'custom';
export type MineradioLyricHighlightMode = 'auto' | 'custom';
export type MineradioVisualTintMode = 'auto' | 'custom';
export type MineradioBackgroundColorMode = 'cover' | 'custom';
export type MineradioPerformanceQuality = 'eco' | 'balanced' | 'high' | 'ultra';
export type MineradioLyricFont =
  | 'sans'
  | 'hei'
  | 'song'
  | 'bold-song'
  | 'stone-song'
  | 'kai-song'
  | 'serif-en'
  | 'gothic'
  | 'editorial'
  | 'humanist'
  | 'mono'
  | 'display';

export interface MineradioPluginSettings {
  preset: MineradioVisualPreset;
  intensity: number;
  coverSpread: number;
  depth: number;
  coverResolution: number;
  cinema: boolean;
  cinemaShake: number;
  floatLayer: boolean;
  pointScale: number;
  speed: number;
  twist: number;
  colorBoost: number;
  scatter: number;
  bgFade: number;
  bloom: boolean;
  bloomStrength: number;
  edge: boolean;
  lyricGlow: boolean;
  lyricGlowBeat: boolean;
  lyricGlowParticles: boolean;
  lyricCameraLock: boolean;
  lyricGlowStrength: number;
  lyricScale: number;
  lyricOffsetX: number;
  lyricOffsetY: number;
  lyricOffsetZ: number;
  lyricTiltX: number;
  lyricTiltY: number;
  lyricColorMode: MineradioLyricColorMode;
  lyricColor: string;
  lyricHighlightMode: MineradioLyricHighlightMode;
  lyricHighlightColor: string;
  lyricGlowLinked: boolean;
  lyricGlowColor: string;
  lyricFont: MineradioLyricFont;
  lyricLetterSpacing: number;
  lyricLineHeight: number;
  lyricWeight: number;
  visualTintMode: MineradioVisualTintMode;
  visualTintColor: string;
  backgroundColorMode: MineradioBackgroundColorMode;
  backgroundColor: string;
  backgroundOpacity: number;
  performanceQuality: MineradioPerformanceQuality;
  shelf: MineradioShelfMode;
  shelfCameraMode: MineradioShelfCameraMode;
  shelfPresence: MineradioShelfPresence;
  shelfShowPodcasts: boolean;
  shelfMergeCollections: boolean;
  shelfSize: number;
  shelfOffsetX: number;
  shelfOffsetY: number;
  shelfOffsetZ: number;
  shelfAngleY: number;
  shelfOpacity: number;
  shelfBgOpacity: number;
  shelfAccentColor: string;
  cam: MineradioCameraMode;
  desktopLyrics: boolean;
  wallpaperMode: boolean;
}

export const MINERADIO_DEFAULT_SETTINGS: MineradioPluginSettings = {
  preset: 'cover',
  intensity: 0.85,
  coverSpread: 1,
  depth: 1,
  coverResolution: 1.55,
  cinema: true,
  cinemaShake: 0.5,
  floatLayer: false,
  pointScale: 1,
  speed: 1,
  twist: 0,
  colorBoost: 1.1,
  scatter: 0,
  bgFade: 0.2,
  bloom: false,
  bloomStrength: 0.62,
  edge: false,
  lyricGlow: true,
  lyricGlowBeat: true,
  lyricGlowParticles: false,
  lyricCameraLock: false,
  lyricGlowStrength: 0.28,
  lyricScale: 1,
  lyricOffsetX: 0,
  lyricOffsetY: 0,
  lyricOffsetZ: 0,
  lyricTiltX: 0,
  lyricTiltY: 0,
  lyricColorMode: 'auto',
  lyricColor: '#a9b8c8',
  lyricHighlightMode: 'auto',
  lyricHighlightColor: '#fac900',
  lyricGlowLinked: true,
  lyricGlowColor: '#008aff',
  lyricFont: 'hei',
  lyricLetterSpacing: 0,
  lyricLineHeight: 1,
  lyricWeight: 900,
  visualTintMode: 'auto',
  visualTintColor: '#9db8cf',
  backgroundColorMode: 'cover',
  backgroundColor: '#000000',
  backgroundOpacity: 1,
  performanceQuality: 'high',
  shelf: 'side',
  shelfCameraMode: 'static',
  shelfPresence: 'always',
  shelfShowPodcasts: false,
  shelfMergeCollections: false,
  shelfSize: 1,
  shelfOffsetX: 0,
  shelfOffsetY: 0,
  shelfOffsetZ: 0,
  shelfAngleY: -15,
  shelfOpacity: 1,
  shelfBgOpacity: 0.9,
  shelfAccentColor: '#ffffff',
  cam: 'off',
  desktopLyrics: false,
  wallpaperMode: false,
};

export const MINERADIO_SETTING_SECTIONS = [
  { id: 'visual', label: '主控', description: '律动、景深、镜头与封面粒子基础效果', order: 0, defaultOpen: true },
  { id: 'lyrics', label: '歌词外观', description: '颜色、字体、位置和悬浮角度', order: 1, defaultOpen: true },
  { id: 'overlay', label: '叠加效果', description: '粒子层、溢光、轮廓和桌面歌词入口', order: 2, defaultOpen: true },
  { id: 'stage', label: '3D / 手势', description: '3D 歌单架、动态镜头和摄像头交互', order: 3, defaultOpen: true },
  { id: 'advanced', label: '高级参数', description: '粒子流速、扭曲、色彩、离散和背景压暗', order: 4, defaultOpen: true },
] satisfies NonNullable<DancePluginConfig['settingSections']>;

export const MINERADIO_SETTINGS_SCHEMA = {
  preset: {
    type: 'select',
    label: '视觉预设',
    default: MINERADIO_DEFAULT_SETTINGS.preset,
    options: [
      { label: 'emily专辑封面', value: 'cover' },
      { label: '滚筒', value: 'tunnel' },
      { label: '星球', value: 'orbit' },
      { label: '虚空', value: 'void' },
      { label: '唱片', value: 'vinyl' },
      { label: '星河', value: 'wallpaper' },
    ],
    section: 'visual',
    order: 0,
    help: '对齐 Mineradio 原控制台预设；安魂骷髅预设依赖专属模型资产，后续单独接入。',
  },
  intensity: {
    type: 'number',
    label: '律动强度',
    default: MINERADIO_DEFAULT_SETTINGS.intensity,
    min: 0.2,
    max: 1.6,
    section: 'visual',
    order: 10,
  },
  coverSpread: {
    type: 'number',
    label: '封面扩散',
    default: MINERADIO_DEFAULT_SETTINGS.coverSpread,
    min: 0,
    max: 1.4,
    section: 'visual',
    order: 20,
    help: '额外扩散倍率，0 更接近静态封面，1 为原 Mineradio 动态幅度。',
  },
  depth: {
    type: 'number',
    label: '立体感',
    default: MINERADIO_DEFAULT_SETTINGS.depth,
    min: 0.2,
    max: 1.8,
    section: 'visual',
    order: 30,
  },
  coverResolution: {
    type: 'number',
    label: '封面清晰度',
    default: MINERADIO_DEFAULT_SETTINGS.coverResolution,
    min: 0.75,
    max: 1.55,
    section: 'visual',
    order: 40,
    help: '当前版本固定高密度点阵渲染，后续用于运行时重建粒子网格。',
  },
  cinemaShake: {
    type: 'number',
    label: '镜头晃动',
    default: MINERADIO_DEFAULT_SETTINGS.cinemaShake,
    min: 0,
    max: 1.8,
    section: 'visual',
    order: 50,
  },
  lyricGlowStrength: {
    type: 'number',
    label: '歌词溢光',
    default: MINERADIO_DEFAULT_SETTINGS.lyricGlowStrength,
    min: 0,
    max: 0.85,
    section: 'visual',
    order: 60,
  },
  lyricColorMode: {
    type: 'select',
    label: '歌词颜色',
    default: MINERADIO_DEFAULT_SETTINGS.lyricColorMode,
    options: [
      { label: '封面取色', value: 'auto' },
      { label: '自定义', value: 'custom' },
    ],
    section: 'lyrics',
    order: 10,
  },
  lyricColor: {
    type: 'color',
    label: '歌词自定义色',
    default: MINERADIO_DEFAULT_SETTINGS.lyricColor,
    section: 'lyrics',
    order: 20,
  },
  lyricHighlightMode: {
    type: 'select',
    label: '高亮颜色',
    default: MINERADIO_DEFAULT_SETTINGS.lyricHighlightMode,
    options: [
      { label: '跟随歌词', value: 'auto' },
      { label: '自定义', value: 'custom' },
    ],
    section: 'lyrics',
    order: 30,
  },
  lyricHighlightColor: {
    type: 'color',
    label: '高亮自定义色',
    default: MINERADIO_DEFAULT_SETTINGS.lyricHighlightColor,
    section: 'lyrics',
    order: 40,
  },
  lyricGlowLinked: {
    type: 'boolean',
    label: '溢光链接高亮',
    default: MINERADIO_DEFAULT_SETTINGS.lyricGlowLinked,
    section: 'lyrics',
    order: 50,
  },
  lyricGlowColor: {
    type: 'color',
    label: '溢光自定义色',
    default: MINERADIO_DEFAULT_SETTINGS.lyricGlowColor,
    section: 'lyrics',
    order: 60,
  },
  lyricFont: {
    type: 'select',
    label: '歌词字体',
    default: MINERADIO_DEFAULT_SETTINGS.lyricFont,
    options: [
      { label: '默认', value: 'sans' },
      { label: '黑体', value: 'hei' },
      { label: '宋体', value: 'song' },
      { label: '粗宋', value: 'bold-song' },
      { label: '石印宋', value: 'stone-song' },
      { label: '楷宋', value: 'kai-song' },
      { label: 'Serif', value: 'serif-en' },
      { label: 'Gothic', value: 'gothic' },
      { label: 'Editorial', value: 'editorial' },
      { label: 'Humanist', value: 'humanist' },
      { label: '等宽', value: 'mono' },
      { label: '标题', value: 'display' },
    ],
    section: 'lyrics',
    order: 70,
  },
  lyricLetterSpacing: {
    type: 'number',
    label: '字间距',
    default: MINERADIO_DEFAULT_SETTINGS.lyricLetterSpacing,
    min: -0.04,
    max: 0.18,
    step: 0.005,
    section: 'lyrics',
    order: 80,
  },
  lyricLineHeight: {
    type: 'number',
    label: '行距',
    default: MINERADIO_DEFAULT_SETTINGS.lyricLineHeight,
    min: 0.86,
    max: 1.35,
    section: 'lyrics',
    order: 90,
  },
  lyricWeight: {
    type: 'number',
    label: '字重',
    default: MINERADIO_DEFAULT_SETTINGS.lyricWeight,
    min: 500,
    max: 900,
    step: 50,
    section: 'lyrics',
    order: 100,
  },
  visualTintMode: {
    type: 'select',
    label: '视觉染色',
    default: MINERADIO_DEFAULT_SETTINGS.visualTintMode,
    options: [
      { label: '封面取色', value: 'auto' },
      { label: '自定义', value: 'custom' },
    ],
    section: 'overlay',
    order: 0,
  },
  visualTintColor: {
    type: 'color',
    label: '视觉染色颜色',
    default: MINERADIO_DEFAULT_SETTINGS.visualTintColor,
    section: 'overlay',
    order: 1,
  },
  backgroundColorMode: {
    type: 'select',
    label: '背景颜色',
    default: MINERADIO_DEFAULT_SETTINGS.backgroundColorMode,
    options: [
      { label: '封面取色', value: 'cover' },
      { label: '自定义', value: 'custom' },
    ],
    section: 'overlay',
    order: 2,
  },
  backgroundColor: {
    type: 'color',
    label: '背景自定义色',
    default: MINERADIO_DEFAULT_SETTINGS.backgroundColor,
    section: 'overlay',
    order: 3,
  },
  backgroundOpacity: {
    type: 'number',
    label: '背景不透明度',
    default: MINERADIO_DEFAULT_SETTINGS.backgroundOpacity,
    min: 0,
    max: 1,
    step: 0.01,
    section: 'overlay',
    order: 4,
  },
  lyricScale: {
    type: 'number',
    label: '歌词大小',
    default: MINERADIO_DEFAULT_SETTINGS.lyricScale,
    min: 0.35,
    max: 1.65,
    section: 'lyrics',
    order: 110,
  },
  lyricOffsetX: {
    type: 'number',
    label: '水平位置',
    default: MINERADIO_DEFAULT_SETTINGS.lyricOffsetX,
    min: -2,
    max: 2,
    section: 'lyrics',
    order: 120,
  },
  lyricOffsetY: {
    type: 'number',
    label: '垂直位置',
    default: MINERADIO_DEFAULT_SETTINGS.lyricOffsetY,
    min: -1.2,
    max: 1.35,
    section: 'lyrics',
    order: 130,
  },
  lyricOffsetZ: {
    type: 'number',
    label: '景深位置',
    default: MINERADIO_DEFAULT_SETTINGS.lyricOffsetZ,
    min: -1.6,
    max: 1.6,
    section: 'lyrics',
    order: 140,
  },
  lyricTiltX: {
    type: 'number',
    label: '上下角度',
    default: MINERADIO_DEFAULT_SETTINGS.lyricTiltX,
    min: -42,
    max: 42,
    step: 1,
    section: 'lyrics',
    order: 150,
  },
  lyricTiltY: {
    type: 'number',
    label: '左右角度',
    default: MINERADIO_DEFAULT_SETTINGS.lyricTiltY,
    min: -42,
    max: 42,
    step: 1,
    section: 'lyrics',
    order: 160,
  },
  floatLayer: {
    type: 'boolean',
    label: '浮空粒子层',
    default: MINERADIO_DEFAULT_SETTINGS.floatLayer,
    section: 'overlay',
    order: 10,
  },
  cinema: {
    type: 'boolean',
    label: '电影镜头',
    default: MINERADIO_DEFAULT_SETTINGS.cinema,
    section: 'overlay',
    order: 20,
  },
  lyricGlow: {
    type: 'boolean',
    label: '歌词溢光',
    default: MINERADIO_DEFAULT_SETTINGS.lyricGlow,
    section: 'overlay',
    order: 30,
  },
  lyricGlowBeat: {
    type: 'boolean',
    label: '鼓点溢光',
    default: MINERADIO_DEFAULT_SETTINGS.lyricGlowBeat,
    section: 'overlay',
    order: 40,
  },
  lyricGlowParticles: {
    type: 'boolean',
    label: '歌词光粒',
    default: MINERADIO_DEFAULT_SETTINGS.lyricGlowParticles,
    section: 'overlay',
    order: 50,
  },
  lyricCameraLock: {
    type: 'boolean',
    label: '歌词镜头绑定',
    default: MINERADIO_DEFAULT_SETTINGS.lyricCameraLock,
    section: 'overlay',
    order: 60,
  },
  pointScale: {
    type: 'number',
    label: '粒子尺寸',
    default: MINERADIO_DEFAULT_SETTINGS.pointScale,
    min: 0.5,
    max: 2.2,
    section: 'advanced',
    order: 10,
  },
  speed: {
    type: 'number',
    label: '流速',
    default: MINERADIO_DEFAULT_SETTINGS.speed,
    min: 0.2,
    max: 2.5,
    section: 'advanced',
    order: 20,
  },
  twist: {
    type: 'number',
    label: '扭曲',
    default: MINERADIO_DEFAULT_SETTINGS.twist,
    min: 0,
    max: 0.6,
    section: 'advanced',
    order: 30,
  },
  bloom: {
    type: 'boolean',
    label: '粒子溢光',
    default: MINERADIO_DEFAULT_SETTINGS.bloom,
    section: 'overlay',
    order: 70,
  },
  bloomStrength: {
    type: 'number',
    label: '光晕强度',
    default: MINERADIO_DEFAULT_SETTINGS.bloomStrength,
    min: 0,
    max: 1.6,
    section: 'advanced',
    order: 50,
  },
  edge: {
    type: 'boolean',
    label: '轮廓高亮',
    default: MINERADIO_DEFAULT_SETTINGS.edge,
    section: 'overlay',
    order: 80,
  },
  colorBoost: {
    type: 'number',
    label: '色彩张力',
    default: MINERADIO_DEFAULT_SETTINGS.colorBoost,
    min: 0.5,
    max: 2,
    section: 'advanced',
    order: 40,
  },
  scatter: {
    type: 'number',
    label: '离散感',
    default: MINERADIO_DEFAULT_SETTINGS.scatter,
    min: 0,
    max: 0.5,
    section: 'advanced',
    order: 60,
  },
  bgFade: {
    type: 'number',
    label: '背景压缩',
    default: MINERADIO_DEFAULT_SETTINGS.bgFade,
    min: 0,
    max: 1.2,
    section: 'advanced',
    order: 70,
  },
  performanceQuality: {
    type: 'select',
    label: '画质档位',
    default: MINERADIO_DEFAULT_SETTINGS.performanceQuality,
    options: [
      { label: '低', value: 'eco' },
      { label: '中', value: 'balanced' },
      { label: '高', value: 'high' },
      { label: '超高', value: 'ultra' },
    ],
    section: 'advanced',
    order: 80,
  },
  shelf: {
    type: 'select',
    label: '3D 歌单架',
    default: MINERADIO_DEFAULT_SETTINGS.shelf,
    options: [
      { label: '关闭', value: 'off' },
      { label: '侧栏', value: 'side' },
      { label: '舞台', value: 'stage' },
    ],
    section: 'stage',
    order: 10,
  },
  shelfCameraMode: {
    type: 'select',
    label: '歌单架镜头',
    default: MINERADIO_DEFAULT_SETTINGS.shelfCameraMode,
    options: [
      { label: '动态镜头', value: 'dynamic' },
      { label: '静态镜头', value: 'static' },
    ],
    section: 'stage',
    order: 20,
  },
  shelfPresence: {
    type: 'select',
    label: '歌单架显示',
    default: MINERADIO_DEFAULT_SETTINGS.shelfPresence,
    options: [
      { label: '自动隐藏', value: 'auto' },
      { label: '常驻', value: 'always' },
    ],
    section: 'stage',
    order: 30,
  },
  shelfShowPodcasts: {
    type: 'boolean',
    label: '显示播客歌单',
    default: MINERADIO_DEFAULT_SETTINGS.shelfShowPodcasts,
    disabled: true,
    section: 'stage',
    order: 40,
    help: 'DancingMusic 当前队列协议暂不区分播客收藏。',
  },
  shelfMergeCollections: {
    type: 'boolean',
    label: '合并收藏歌单',
    default: MINERADIO_DEFAULT_SETTINGS.shelfMergeCollections,
    section: 'stage',
    order: 50,
    help: '宿主会把收藏和当前连接器精选歌单作为只读快照传入插件。',
  },
  shelfAccentColor: {
    type: 'color',
    label: '歌单架颜色',
    default: MINERADIO_DEFAULT_SETTINGS.shelfAccentColor,
    section: 'stage',
    order: 60,
  },
  shelfSize: {
    type: 'number',
    label: '歌单架大小',
    default: MINERADIO_DEFAULT_SETTINGS.shelfSize,
    min: 0.65,
    max: 1.45,
    section: 'stage',
    order: 70,
  },
  shelfOffsetX: {
    type: 'number',
    label: '左右位置',
    default: MINERADIO_DEFAULT_SETTINGS.shelfOffsetX,
    min: -1.2,
    max: 1.2,
    section: 'stage',
    order: 80,
  },
  shelfOffsetY: {
    type: 'number',
    label: '上下位置',
    default: MINERADIO_DEFAULT_SETTINGS.shelfOffsetY,
    min: -0.9,
    max: 0.9,
    section: 'stage',
    order: 90,
  },
  shelfOffsetZ: {
    type: 'number',
    label: '前后景深',
    default: MINERADIO_DEFAULT_SETTINGS.shelfOffsetZ,
    min: -0.9,
    max: 0.9,
    section: 'stage',
    order: 100,
  },
  shelfAngleY: {
    type: 'number',
    label: '侧向角度',
    default: MINERADIO_DEFAULT_SETTINGS.shelfAngleY,
    min: -30,
    max: 30,
    step: 1,
    section: 'stage',
    order: 110,
  },
  shelfOpacity: {
    type: 'number',
    label: '整体透明度',
    default: MINERADIO_DEFAULT_SETTINGS.shelfOpacity,
    min: 0.25,
    max: 1,
    section: 'stage',
    order: 120,
  },
  shelfBgOpacity: {
    type: 'number',
    label: '背景透明度',
    default: MINERADIO_DEFAULT_SETTINGS.shelfBgOpacity,
    min: 0.25,
    max: 0.98,
    section: 'stage',
    order: 130,
  },
  cam: {
    type: 'select',
    label: '摄像头交互',
    default: MINERADIO_DEFAULT_SETTINGS.cam,
    options: [
      { label: '关闭', value: 'off' },
      { label: '手势触碰', value: 'gesture' },
    ],
    disabled: true,
    section: 'stage',
    order: 140,
    help: '后续通过 SDK 能力声明请求摄像头权限。',
  },
  desktopLyrics: {
    type: 'boolean',
    label: '桌面歌词',
    default: MINERADIO_DEFAULT_SETTINGS.desktopLyrics,
    disabled: true,
    section: 'overlay',
    order: 90,
    help: '属于桌面端窗口能力，不能由 WebGL 插件直接创建。',
  },
  wallpaperMode: {
    type: 'boolean',
    label: '壁纸模式',
    default: MINERADIO_DEFAULT_SETTINGS.wallpaperMode,
    disabled: true,
    section: 'overlay',
    order: 100,
    help: '需要 Electron 壁纸窗口能力后接入。',
  },
} satisfies NonNullable<DancePluginConfig['settings']>;

function clampNumber(value: unknown, min: number, max: number, fallback: number): number {
  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.max(min, Math.min(max, numeric));
}

function booleanValue(value: unknown, fallback: boolean): boolean {
  if (typeof value === 'boolean') return value;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return fallback;
}

function stringValue<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  if (typeof value === 'string' && allowed.includes(value as T)) return value as T;
  return fallback;
}

function hexValue(value: unknown, fallback: string): string {
  if (typeof value === 'string' && /^#[0-9a-fA-F]{6}$/.test(value)) return value;
  return fallback;
}

export function normalizeMineradioSettings(
  raw: Record<string, unknown> | null | undefined,
  base: MineradioPluginSettings = MINERADIO_DEFAULT_SETTINGS,
): MineradioPluginSettings {
  const source = raw || {};
  return {
    preset: stringValue(source.preset, ['cover', 'tunnel', 'orbit', 'void', 'vinyl', 'wallpaper'] as const, base.preset),
    intensity: clampNumber(source.intensity, 0.2, 1.6, base.intensity),
    coverSpread: clampNumber(source.coverSpread, 0, 1.4, base.coverSpread),
    depth: clampNumber(source.depth, 0.2, 1.8, base.depth),
    coverResolution: clampNumber(source.coverResolution, 0.75, 1.55, base.coverResolution),
    cinema: booleanValue(source.cinema, base.cinema),
    cinemaShake: clampNumber(source.cinemaShake, 0, 1.8, base.cinemaShake),
    floatLayer: booleanValue(source.floatLayer, base.floatLayer),
    pointScale: clampNumber(source.pointScale, 0.5, 2.2, base.pointScale),
    speed: clampNumber(source.speed, 0.2, 2.5, base.speed),
    twist: clampNumber(source.twist, 0, 0.6, base.twist),
    colorBoost: clampNumber(source.colorBoost, 0.5, 2, base.colorBoost),
    scatter: clampNumber(source.scatter, 0, 0.5, base.scatter),
    bgFade: clampNumber(source.bgFade, 0, 1.2, base.bgFade),
    bloom: booleanValue(source.bloom, base.bloom),
    bloomStrength: clampNumber(source.bloomStrength, 0, 1.6, base.bloomStrength),
    edge: booleanValue(source.edge, base.edge),
    lyricGlow: booleanValue(source.lyricGlow, base.lyricGlow),
    lyricGlowBeat: booleanValue(source.lyricGlowBeat, base.lyricGlowBeat),
    lyricGlowParticles: booleanValue(source.lyricGlowParticles, base.lyricGlowParticles),
    lyricCameraLock: booleanValue(source.lyricCameraLock, base.lyricCameraLock),
    lyricGlowStrength: clampNumber(source.lyricGlowStrength, 0, 0.85, base.lyricGlowStrength),
    lyricScale: clampNumber(source.lyricScale, 0.35, 1.65, base.lyricScale),
    lyricOffsetX: clampNumber(source.lyricOffsetX, -2, 2, base.lyricOffsetX),
    lyricOffsetY: clampNumber(source.lyricOffsetY, -1.2, 1.35, base.lyricOffsetY),
    lyricOffsetZ: clampNumber(source.lyricOffsetZ, -1.6, 1.6, base.lyricOffsetZ),
    lyricTiltX: clampNumber(source.lyricTiltX, -42, 42, base.lyricTiltX),
    lyricTiltY: clampNumber(source.lyricTiltY, -42, 42, base.lyricTiltY),
    lyricColorMode: stringValue(source.lyricColorMode, ['auto', 'custom'] as const, base.lyricColorMode),
    lyricColor: hexValue(source.lyricColor, base.lyricColor),
    lyricHighlightMode: stringValue(source.lyricHighlightMode, ['auto', 'custom'] as const, base.lyricHighlightMode),
    lyricHighlightColor: hexValue(source.lyricHighlightColor, base.lyricHighlightColor),
    lyricGlowLinked: booleanValue(source.lyricGlowLinked, base.lyricGlowLinked),
    lyricGlowColor: hexValue(source.lyricGlowColor, base.lyricGlowColor),
    lyricFont: stringValue(
      source.lyricFont,
      ['sans', 'hei', 'song', 'bold-song', 'stone-song', 'kai-song', 'serif-en', 'gothic', 'editorial', 'humanist', 'mono', 'display'] as const,
      base.lyricFont,
    ),
    lyricLetterSpacing: clampNumber(source.lyricLetterSpacing, -0.04, 0.18, base.lyricLetterSpacing),
    lyricLineHeight: clampNumber(source.lyricLineHeight, 0.86, 1.35, base.lyricLineHeight),
    lyricWeight: clampNumber(source.lyricWeight, 500, 900, base.lyricWeight),
    visualTintMode: stringValue(source.visualTintMode, ['auto', 'custom'] as const, base.visualTintMode),
    visualTintColor: hexValue(source.visualTintColor, base.visualTintColor),
    backgroundColorMode: stringValue(source.backgroundColorMode, ['cover', 'custom'] as const, base.backgroundColorMode),
    backgroundColor: hexValue(source.backgroundColor, base.backgroundColor),
    backgroundOpacity: clampNumber(source.backgroundOpacity, 0, 1, base.backgroundOpacity),
    performanceQuality: stringValue(source.performanceQuality, ['eco', 'balanced', 'high', 'ultra'] as const, base.performanceQuality),
    shelf: stringValue(source.shelf, ['off', 'side', 'stage'] as const, base.shelf),
    shelfCameraMode: stringValue(source.shelfCameraMode, ['dynamic', 'static'] as const, base.shelfCameraMode),
    shelfPresence: stringValue(source.shelfPresence, ['auto', 'always'] as const, base.shelfPresence),
    shelfShowPodcasts: booleanValue(source.shelfShowPodcasts, base.shelfShowPodcasts),
    shelfMergeCollections: booleanValue(source.shelfMergeCollections, base.shelfMergeCollections),
    shelfSize: clampNumber(source.shelfSize, 0.65, 1.45, base.shelfSize),
    shelfOffsetX: clampNumber(source.shelfOffsetX, -1.2, 1.2, base.shelfOffsetX),
    shelfOffsetY: clampNumber(source.shelfOffsetY, -0.9, 0.9, base.shelfOffsetY),
    shelfOffsetZ: clampNumber(source.shelfOffsetZ, -0.9, 0.9, base.shelfOffsetZ),
    shelfAngleY: clampNumber(source.shelfAngleY, -30, 30, base.shelfAngleY),
    shelfOpacity: clampNumber(source.shelfOpacity, 0.25, 1, base.shelfOpacity),
    shelfBgOpacity: clampNumber(source.shelfBgOpacity, 0.25, 0.98, base.shelfBgOpacity),
    shelfAccentColor: hexValue(source.shelfAccentColor, base.shelfAccentColor),
    cam: stringValue(source.cam, ['off', 'gesture'] as const, base.cam),
    desktopLyrics: booleanValue(source.desktopLyrics, base.desktopLyrics),
    wallpaperMode: booleanValue(source.wallpaperMode, base.wallpaperMode),
  };
}
