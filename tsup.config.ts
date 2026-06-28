import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  sourcemap: false,
  minify: true,
  splitting: false,
  treeshake: true,
  target: 'es2020',
  external: ['@dancingmusic/plugin-sdk'],
  noExternal: ['three'],
  loader: {
    '.svg': 'dataurl',
  },
});
