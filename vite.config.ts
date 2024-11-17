import Path from 'node:path'
import { defineConfig } from 'vite'

const SourceRoot = Path.join(process.cwd(), 'src')

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: Path.join(SourceRoot, 'index.ts'),
      name: 'MusicLyricUtils',
      formats: ['cjs', 'iife', 'es'],
      fileName: 'music-lyric-utils',
    },
    minify: false,
  },
  resolve: {
    alias: {
      '@root': SourceRoot,
    },
  },
})
