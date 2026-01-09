import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 把這一行改成這樣

export default defineConfig({
  plugins: [react()],
  base: '/12/', 
})