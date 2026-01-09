import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 本地開發用 /，生產環境用相對路徑 ./
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  build: {
    // 確保 404.html 也被複製到 dist
    copyPublicDir: true,
  },
})