import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User page (MatDepussay.github.io) is served from the domain root, not a
// /repo-name/ subpath like a project page would be — keep base at '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: { outDir: 'dist' },
})
