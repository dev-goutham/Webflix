import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  define: {
    'process.env': {
      REACT_APP_TMDB_API_KEY: process.env.REACT_APP_TMDB_API_KEY,
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:9999/',
  //       changeOrigin: true,
  //       secure: false,
  //       ws: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
