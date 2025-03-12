import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  
    port: 80,         // Ensure Railway uses port 80
    strictPort: true,
    allowedHosts: ["signup-ui1-production.up.railway.app"],  
  },
})
