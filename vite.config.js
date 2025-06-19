import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    host: true,
    strictPort: true,
    allowedHosts: [
      '74e8-2c0f-2a80-38a-6f10-1d23-5b21-7d70-495a.ngrok-free.app'
    ]
  }
})
