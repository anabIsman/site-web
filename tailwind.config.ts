import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: { xs: "375px", md: "768px", lg: "1024px", xl: "1440px", "2xl": "1920px" },
    extend: {
      colors: { obsidian: "#111111", ivory: "#F8F4EF", cognac: "#9B6A3D", bronze: "#B08D57", smoke: "#707070" },
      fontFamily: { serif: ["'Playfair Display Variable'", "Georgia", "serif"], sans: ["'Inter Variable'", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
