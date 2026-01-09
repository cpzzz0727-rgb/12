import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 開發環境使用 '/'，生產環境使用 '/12/'
  base: process.env.NODE_ENV === 'production' ? '/12/' : '/',
  build: {
    // 確保 404.html 也被複製到 dist
    copyPublicDir: true,
  },
})