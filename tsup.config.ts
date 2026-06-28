import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  sourcemap: false,
  splitting: false,
  treeshake: true,
  target: 'es2020',
  external: ['@dancingmusic/plugin-sdk', 'three'],
  loader: {
    '.svg': 'dataurl',
  },
});
