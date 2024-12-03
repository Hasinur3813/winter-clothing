import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        primaryColor: "#2ec4b6",
        secondaryColor: "#cbf3f0",
        accentColor: "#00d7c0",
        darkText: "#1a1a1a",
        light: "#f5f5f5",
        highlight: "#e71d36",
      },
    },
  },
  plugins: [daisyui],
};
