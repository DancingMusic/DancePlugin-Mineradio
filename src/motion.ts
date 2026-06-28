export interface MineradioStageMotionInput {
  portrait: boolean;
  dynamics: number;
  climax: number;
  bloom: number;
  beatGlow: number;
}

export interface MineradioStageMotion {
  drive: number;
  coverScale: number;
  coverY: number;
  coverZ: number;
  lyricZOffset: number;
  lyricScale: number;
  shaderClimax: number;
}

export interface MineradioRippleTriggerInput {
  bassDrive: number;
  climax: number;
  elapsed: number;
  lastRippleAt: number;
  wasBassRising: boolean;
}

export interface MineradioRippleTrigger {
  shouldTrigger: boolean;
  nextBassRising: boolean;
  cooldown: number;
  threshold: number;
}

const clamp01 = (value: number): number => Math.max(0, Math.min(1, value));

export function computeMineradioStageMotion(input: MineradioStageMotionInput): MineradioStageMotion {
  const dynamics = Math.max(0, Math.min(1.18, Number.isFinite(input.dynamics) ? input.dynamics : 0));
  const dynamicLift = clamp01((dynamics - 0.62) / 0.54);
  const climax = clamp01(input.climax);
  const bloom = clamp01(input.bloom);
  const beatGlow = Math.max(0, Math.min(1.2, input.beatGlow));
  const drive = clamp01(climax * 0.78 + dynamicLift * 0.38 + bloom * 0.22);
  const baseScale = input.portrait ? 1.06 : 1.04;
  const baseY = input.portrait ? 0.24 : 0.02;
  const lyricBaseScale = input.portrait ? 0.82 : 0.78;

  return {
    drive,
    coverScale: baseScale * (1 + drive * 0.18 + beatGlow * 0.028),
    coverY: baseY + drive * (input.portrait ? 0.040 : 0.030),
    coverZ: drive * 0.42 + beatGlow * 0.042,
    lyricZOffset: drive * 0.36 + beatGlow * 0.055,
    lyricScale: lyricBaseScale * (1 + drive * 0.080 + beatGlow * 0.018),
    shaderClimax: clamp01(drive * 0.92 + beatGlow * 0.18),
  };
}

export function getMineradioRippleTrigger(input: MineradioRippleTriggerInput): MineradioRippleTrigger {
  const climax = clamp01(input.climax);
  const threshold = Math.max(0.18, 0.3 - climax * 0.12);
  const cooldown = Math.max(0.16, 0.32 - climax * 0.14);
  const nextBassRising = input.bassDrive > threshold * 0.75;
  const shouldTrigger =
    input.bassDrive > threshold &&
    !input.wasBassRising &&
    input.elapsed - input.lastRippleAt > cooldown;

  return { shouldTrigger, nextBassRising, cooldown, threshold };
}
