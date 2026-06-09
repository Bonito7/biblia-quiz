import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error',
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // Proxy /api requests to the Render backend — avoids CORS in local dev
      '/api': {
        target: 'https://jeko-payment-backend.onrender.com',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})