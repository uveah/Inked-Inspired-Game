import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      host: true
    },
    build: {
      outDir: 'dist',
    },
  };
});
