import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      "/api1": {
        target: "https://medium-com-43xj.onrender.com",
        changeOrigin: true
      }

    }
  }

})
