import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6EE",
        sand: "#F5EDD8",
        espresso: "#1C1208",
        forest: {
          DEFAULT: "#2D5A27",
          dark: "#234720",
          light: "#3a7333",
        },
        brown: "#2A1D0A",
        ink: "#241A0C",
        gold: {
          DEFAULT: "#B8893A",
          light: "#C9A24B",
          dark: "#8F6A28",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "pulse-ring": "pulse-ring 3s cubic-bezier(0.4,0,0.2,1) infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
