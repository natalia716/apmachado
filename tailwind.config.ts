import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#680a09",
        secondary: "#410c15",
        accent: "#690907",
        dark: "#892422",
        light: "#ede9e5",
        beige: "#dacbb6",
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
