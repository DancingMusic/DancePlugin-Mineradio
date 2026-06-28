import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  external: ['@dancingmusic/plugin-sdk', 'three'],
  loader: {
    '.svg': 'dataurl',
  },
});
