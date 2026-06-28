# Mineradio Dancing Plugin Protocol

This document records the contract between the `mineradio` plugin and the DancingMusic host.

## Module Export

The bundle default-exports the `MineradioPlugin` class. The host owns
instantiation so each activation can receive a fresh plugin instance.

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
  playPlaylist?: (request: { id: string; title?: string; startIndex?: number }) => void | Promise<void>;
  getPlaylistDetail?: (request: { id: string; title?: string }) => {
    id: string;
    title?: string;
    tracks: Array<{
      id: string;
      title: string;
      artist: string;
      album?: string;
      cover?: string;
      durationSec?: number;
    }>;
  } | Promise<{
    id: string;
    title?: string;
    tracks: Array<{
      id: string;
      title: string;
      artist: string;
      album?: string;
      cover?: string;
      durationSec?: number;
    }>;
  }>;
  openPlaylistDetail?: (request: { id: string; title?: string }) => void | Promise<void>;
}
```

Current behavior:

- Queue cards call `playQueueIndex(index)`.
- Playlist cards can call `playPlaylist({ id, title })`.
- Detail buttons prefer `getPlaylistDetail({ id, title })` and render a plugin-owned 3D detail panel from the host snapshot.
- Detail rows call `playPlaylist({ id, title, startIndex })` so the host starts the selected playlist track.
- If `getPlaylistDetail` is unavailable, detail buttons fall back to `openPlaylistDetail({ id, title })`.

The plugin must not call MusicStore or connector APIs directly. All playlist detail data comes from the host-owned snapshot.

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
