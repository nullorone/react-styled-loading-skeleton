import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-styled-loading-skeleton',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'styled-components'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})
