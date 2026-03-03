import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Hapus baris import tailwindcss dari '@tailwindcss/vite' jika masih error

export default defineConfig({
  plugins: [
    react(),
    // Jika @tailwindcss/vite tetap tidak ketemu, 
    // pastikan kamu sudah install lewat terminal: npm install @tailwindcss/vite
  ],
  base: '/portofolio/', 
  build: {
    outDir: 'dist',
  }
})