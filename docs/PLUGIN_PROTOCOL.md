# Mineradio Dancing Plugin Protocol

This document records the contract between the `mineradio` plugin and the DancingMusic host.

## Rendering

The plugin declares:

```ts
rendering: {
  context: 'webgl'
}
```

The host provides a canvas. The plugin owns its Three.js renderer and must not resize the host layout outside `resize(width, height)`.

## Host Overlays

The plugin declares:

```ts
hostOverlay: {
  showSongCover: false,
  showSongMetadata: false
}
```

Mineradio renders its own stage metadata and lyrics. Host chrome should stay hidden for this plugin surface.

## Settings Snapshot

The host passes runtime state through `updateSettings(settings)`.

Supported host-owned keys:

| Key | Owner | Purpose |
| --- | --- | --- |
| `currentSong` | Host | Current title, artist, cover, and lyric lines. |
| `currentTime` | Host | Current playback time in seconds. |
| `playlist` | Host | Current queue snapshot for the 3D shelf. |
| `playlistCollections` | Host | Playlist and podcast collection snapshots for the 3D shelf. |
| `currentIndex` | Host | Active queue index. |
| `hostActions` | Host | Action callbacks executed by the host. |

Plugin settings defined in `src/settings.ts` are merged with these runtime keys.

## Host Actions

The plugin may request actions, but the host owns playback and connector data.

```ts
interface DanceHostActions {
  playQueueIndex?: (index: number) => void | Promise<void>;
  playPlaylist?: (request: { id: string; title?: string }) => void | Promise<void>;
  openPlaylistDetail?: (request: { id: string; title?: string }) => void | Promise<void>;
}
```

Current behavior:

- Queue cards call `playQueueIndex(index)`.
- Playlist cards can call `playPlaylist({ id, title })`.
- Detail buttons can call `openPlaylistDetail({ id, title })`.

If the plugin needs richer playlist detail rendering, add that contract to `DancingPluginSdk` first, then consume it here. Do not call MusicStore or connector APIs directly from the plugin.

## Rhythm

The plugin consumes `AudioData.rhythm`.

Required rhythm fields:

- `rhythm.bands`
- `rhythm.onset`
- `rhythm.section`
- `rhythm.beat`
- `rhythm.pulse`
- `rhythm.bass`
- `rhythm.mid`
- `rhythm.treble`
- `rhythm.energy`

The host owns rhythm analysis. The plugin should not create independent `AudioContext`, `AnalyserNode`, media element bindings, or beat-map fetches. This keeps web, desktop, mobile, and cast surfaces on one protocol.

## Store Boundary

`DancingStore` may reference this repository and its GitHub Pages/catalog metadata. It must not contain the Mineradio implementation logic.
