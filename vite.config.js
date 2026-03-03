import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Pastikan ini ada jika pakai Tailwind v4

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Pastikan plugin tailwind dipanggil di sini
  ],
  // Jika nama repo GitHub kamu adalah 'portofolio', ganti menjadi '/portofolio/'
  // Menggunakan './' tetap oke, tapi pastikan build step di GitHub Actions sudah benar
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Memastikan sourcemap tidak bocor jika tidak diperlukan
    sourcemap: false,
  },
})