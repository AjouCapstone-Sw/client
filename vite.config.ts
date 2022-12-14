import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';

const resolve = (src: string) => path.resolve(__dirname, src);
// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [svgr(), react()],
  plugins: [svgr(), react(), mkcert()],
  resolve: {
    alias: [
      { find: '@Components', replacement: resolve('src/Components') },
      { find: '@MSW', replacement: resolve('src/_msw') },
      { find: '@Hook', replacement: resolve('src/Hook') },
      { find: '@Pages', replacement: resolve('src/Pages') },
      { find: '@Util', replacement: resolve('src/Util') },
      { find: '@Context', replacement: resolve('src/Context') },
      { find: '@Socket', replacement: resolve('src/Socket') },
    ],
  },
  server: {
    port: 3000,
    https: true,
  },
});
