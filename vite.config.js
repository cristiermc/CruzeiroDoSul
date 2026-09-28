import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    cssMinify: true,
    emptyOutDir: true
  }
});