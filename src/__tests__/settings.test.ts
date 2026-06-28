import { describe, expect, it } from 'vitest';
import { mineradioCoverParticleGridForResolution } from '../index';
import {
  MINERADIO_DEFAULT_SETTINGS,
  MINERADIO_SETTING_SECTIONS,
  MINERADIO_SETTINGS_SCHEMA,
  normalizeMineradioSettings,
} from '../settings';

describe('mineradio plugin settings', () => {
  it('exposes cover spread as a configurable slider', () => {
    expect(MINERADIO_SETTINGS_SCHEMA.coverSpread).toMatchObject({
      type: 'number',
      label: '封面扩散',
      default: MINERADIO_DEFAULT_SETTINGS.coverSpread,
      min: 0,
      max: 1.4,
    });
  });

  it('clamps cover spread to the supported visual range', () => {
    expect(normalizeMineradioSettings({ coverSpread: -1 }).coverSpread).toBe(0);
    expect(normalizeMineradioSettings({ coverSpread: 2 }).coverSpread).toBe(1.4);
    expect(normalizeMineradioSettings({ coverSpread: 0.35 }).coverSpread).toBe(0.35);
  });

  it('exposes the Mineradio visual console sections through the SDK schema', () => {
    expect(MINERADIO_SETTING_SECTIONS.map(section => section.id)).toEqual([
      'visual',
      'lyrics',
      'overlay',
      'stage',
      'advanced',
    ]);
    expect(MINERADIO_SETTINGS_SCHEMA.shelf).toMatchObject({
      type: 'select',
      label: '3D 歌单架',
      section: 'stage',
    });
    expect(MINERADIO_SETTINGS_SCHEMA.preset).toMatchObject({
      type: 'select',
      label: '视觉预设',
      section: 'visual',
    });
    expect(MINERADIO_SETTINGS_SCHEMA.lyricFont).toMatchObject({
      type: 'select',
      section: 'lyrics',
    });
  });

  it('normalizes copied Mineradio console values', () => {
    const settings = normalizeMineradioSettings({
      speed: 9,
      twist: 1,
      shelf: 'stage',
      shelfCameraMode: 'dynamic',
      preset: 'wallpaper',
      visualTintMode: 'custom',
      visualTintColor: '#abcdef',
      backgroundColorMode: 'custom',
      backgroundColor: '#010203',
      backgroundOpacity: 1.4,
      performanceQuality: 'ultra',
      lyricFont: 'stone-song',
      lyricWeight: 530,
      lyricColorMode: 'custom',
      lyricColor: '#123456',
      shelfAccentColor: 'bad-color',
    });

    expect(settings.speed).toBe(2.5);
    expect(settings.twist).toBe(0.6);
    expect(settings.shelf).toBe('stage');
    expect(settings.shelfCameraMode).toBe('dynamic');
    expect(settings.preset).toBe('wallpaper');
    expect(settings.visualTintMode).toBe('custom');
    expect(settings.visualTintColor).toBe('#abcdef');
    expect(settings.backgroundColorMode).toBe('custom');
    expect(settings.backgroundColor).toBe('#010203');
    expect(settings.backgroundOpacity).toBe(1);
    expect(settings.performanceQuality).toBe('ultra');
    expect(settings.lyricFont).toBe('stone-song');
    expect(settings.lyricWeight).toBe(530);
    expect(settings.lyricColor).toBe('#123456');
    expect(settings.shelfAccentColor).toBe(MINERADIO_DEFAULT_SETTINGS.shelfAccentColor);
  });

  it('uses Mineradio cover resolution to derive odd particle grids', () => {
    expect(mineradioCoverParticleGridForResolution(0.75)).toBe(89);
    expect(mineradioCoverParticleGridForResolution(1)).toBe(119);
    expect(mineradioCoverParticleGridForResolution(1.55)).toBe(183);
    expect(mineradioCoverParticleGridForResolution(9)).toBe(183);
  });
});
