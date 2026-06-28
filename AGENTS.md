# DancePlugin-Mineradio Rules

## Project Identity

This repository is the independent DancingMusic plugin implementation for `mineradio`.

- Plugin id: `mineradio`
- Package: `@dancingmusic/dance-plugin-mineradio`
- Host runtime: `DancingMusic/DancingMusic`
- SDK protocol: `DancingMusic/DancingPluginSdk`
- Store/catalog responsibility: `DancingMusic/DancingStore`

## Start Here

Before changing plugin behavior, read:

- `README.md`
- `docs/PLUGIN_PROTOCOL.md`
- `src/settings.ts`
- the focused source file you are about to edit

If the change touches original Mineradio visual parity, compare against the current Mineradio source in `/Users/wuguangliang/workspace/Mineradio` and keep the existing visual baseline unless the user explicitly asks to change it.

## Boundaries

- Keep implementation logic in this repository or the host repository, not in Store/catalog repositories.
- Do not add music connector calls here. The plugin consumes host snapshots and `hostActions`.
- Do not create player controls, audio elements, or independent audio analysers in the plugin.
- Do not re-enable host top-left cover/title overlays for this plugin; Mineradio renders its own stage text.
- Keep SDK protocol changes in `DancingMusic/DancingPluginSdk`, then update this repo to consume the new contract.

## Commands

```bash
npm install
npm run typecheck
npm test
npm run build
```

Run at least `npm run typecheck` and `npm test` before committing implementation changes. Run `npm run build` before publishing or pushing feature work.

## Visual Guardrails

- The lyric layer is a floating 3D layer bound to the cover stage, not a screen-fixed overlay.
- Drag interaction and double-click reset should keep the Mineradio first-person camera feel.
- Rhythm response must consume `AudioData.rhythm`; do not reintroduce plugin-local rhythm protocols.
- 3D playlist shelf UI should use host snapshots and actions, while the host remains the owner of actual playback.
