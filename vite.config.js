import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https:
export default defineConfig({
  plugins: [react()],
  base:'/Portfolio-Website/',
  build: {
    outDir:'./docs'
  }
})
