import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
      },
      screens: {
        xs: '400px',
        lgx: '1300px',
        exl: '1500px'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
