// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",   // dark background
        primary: "#00E676",     // your green accent
        secondary: "#6C63FF",   // purple/blue accent
        textLight: "#CBD5E1",   // light gray for paragraphs
        textDark: "#FFFFFF",    // white for headings
      },
    },
  },
  plugins: [],
}
