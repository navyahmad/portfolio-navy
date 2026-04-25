/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna background utama yang sangat gelap (bukan hitam pekat)
        background: "#050505", 
        // Warna permukaan komponen (bento box, dsb)
        surface: "#0f0f0f",
        // Warna aksen (bisa kamu ganti sesuai selera, di sini saya pakai biru)
        accent: {
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
        },
        muted: "#a3a3a3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": { 
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}