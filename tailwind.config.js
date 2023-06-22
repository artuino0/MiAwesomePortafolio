/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.tsx"],
  theme: {
    backgroundImage: {
      "bg-img": "url('/images/bg.png')",
    },
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px", // Nueva dimensión personalizada
    },
    extend: {
      colors: {
        primary: "#2E86C1",
        dark: "#141414",
        medium: "#242424",
        light: "#979797",
        white: "#FFFFFF",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
