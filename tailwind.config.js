/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.tsx"],
  theme: {
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "#000000",
        surface: "#0B0B0B",
        fg: "#FFFFFF",
        muted: "#8A8A8A",
        primary: "#2D7DFF",
        "primary-soft": "#9DC4FF",
        border: "#242424",
      },
      fontFamily: {
        heading: ["Anton", "Impact", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        lg: "8px",
      },
      maxWidth: {
        content: "1216px",
      },
    },
  },
  plugins: [],
};
