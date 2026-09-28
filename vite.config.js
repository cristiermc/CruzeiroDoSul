import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CruzeiroDoSul/',
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    cssMinify: true,
    emptyOutDir: true
  }
});