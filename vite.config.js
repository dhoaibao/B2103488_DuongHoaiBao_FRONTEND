import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/contactbook/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3001,
    // proxy: {
    //   "/api": {
    //   // target: "http://localhost:3000/",
    //   target: "https://b2103488-duong-hoai-bao-backend.vercel.app/",
    //   changeOrigin: true,
    //   },
    //   }
    },
})
