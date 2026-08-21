import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/internal': {
        target: process.env.API_URL || 'http://localhost:8080',
        changeOrigin: true
      },
      '/api': {
        target: process.env.API_URL || 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
