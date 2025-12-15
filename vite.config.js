import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // <--- 1. Importante: Essa linha precisa existir

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // <--- 2. Importante: O plugin precisa ser chamado aqui
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
