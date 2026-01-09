import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/12/',
  build: {
    // 確保 404.html 也被複製到 dist
    copyPublicDir: true,
  },
})