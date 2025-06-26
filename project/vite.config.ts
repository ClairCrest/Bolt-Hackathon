import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/chatbot': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    },
    host: true,
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});