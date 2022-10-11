import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@Components', replacement: path.resolve(__dirname, 'src/Components') },
      { find: '@MSW', replacement: path.resolve(__dirname, 'src/_msw') },
      { find: '@Hook', replacement: path.resolve(__dirname, 'src/Hook') },
      { find: '@Pages', replacement: path.resolve(__dirname, 'src/Pages') },
      { find: '@Util', replacement: path.resolve(__dirname, 'src/Util') },
    ],
  },
  server: {
    port: 3000,
  },
});
