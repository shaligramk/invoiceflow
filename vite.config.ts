import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'pdf': ['react-to-pdf'],
          'date': ['date-fns'],
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild'
  }
});