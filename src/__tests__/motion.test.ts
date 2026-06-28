import { describe, expect, it } from 'vitest';
import { computeMineradioStageMotion, getMineradioRippleTrigger } from '../motion';

describe('mineradio section motion', () => {
  it('makes chorus sections visibly larger and closer', () => {
    const idle = computeMineradioStageMotion({
      portrait: false,
      dynamics: 0,
      climax: 0,
      bloom: 0,
      beatGlow: 0,
    });
    const chorus = computeMineradioStageMotion({
      portrait: false,
      dynamics: 1.08,
      climax: 0.82,
      bloom: 0.55,
      beatGlow: 0.35,
    });

    expect(idle.coverScale).toBeCloseTo(1.04, 2);
    expect(chorus.drive).toBeGreaterThan(0.85);
    expect(chorus.coverScale).toBeGreaterThan(idle.coverScale + 0.15);
    expect(chorus.coverZ).toBeGreaterThan(idle.coverZ + 0.34);
    expect(chorus.lyricZOffset).toBeGreaterThan(0.30);
    expect(chorus.shaderClimax).toBeGreaterThan(0.75);
  });

  it('uses section climax to make bass ripples easier to trigger', () => {
    const normal = getMineradioRippleTrigger({
      bassDrive: 0.25,
      climax: 0,
      elapsed: 1,
      lastRippleAt: 0,
      wasBassRising: false,
    });
    const chorus = getMineradioRippleTrigger({
      bassDrive: 0.25,
      climax: 0.9,
      elapsed: 1,
      lastRippleAt: 0,
      wasBassRising: false,
    });

    expect(normal.shouldTrigger).toBe(false);
    expect(chorus.shouldTrigger).toBe(true);
    expect(chorus.threshold).toBeLessThan(normal.threshold);
    expect(chorus.cooldown).toBeLessThan(normal.cooldown);
  });
});
