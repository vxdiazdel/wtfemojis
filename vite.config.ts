import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/emojis': {
        target: 'https://gist.githubusercontent.com',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api\/emojis$/,
            'vxdiazdel/6379467dac401f2e3e2f1b6a68933605/raw/dea3d220b003d858f3bce0b7d82035baa769a019/emojis.json',
          ),
      },
    },
  },
});
