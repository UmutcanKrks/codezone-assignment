import type { Config } from "tailwindcss"

const config = {
  darkMode: "class", // This line is for dark mode toggle
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        saira: ["var(--font-saira)", "sans-serif"],
        sairaCondensed: ["var(--font-saira-condensed)", "sans-serif"],
      },
      colors: {
        rapkologyYellow: "var(--rapkology-yellow)",
        rapkologyBlack: "var(--rapkology-black)",
        rapkologyWhite: "var(--rapkology-white)",
        rapkologyGrey: "var(--rapkology-grey)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, transparent, rgba(18, 18, 18, 0.9)), url('/images/hero-1.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
