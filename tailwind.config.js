/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Latar belakang hitam pekat
        'space-black': '#020203', 
        // Biru elektrik neon
        'electric-blue': '#00D2FF',
        // Ungu royal gradasi
        'royal-purple': '#7000FF',
        'neon-magenta': '#B633FF',
        // Warna teks sekunder (biru sangat pudar, bukan abu-abu)
        'slate-blue': '#8B949E', 
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to bottom right, #020203, #0A0A1A)',
        'neon-gradient': 'linear-gradient(90deg, #00D2FF 0%, #7000FF 100%)',
      }
    },
  },
  plugins: [],
}