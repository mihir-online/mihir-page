import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to your preferred port
    open: true, // Automatically open browser
    host: true, // Listen on all local IPs
    strictPort: true, // If port is in use, throw an error
  },
})
