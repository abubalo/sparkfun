/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{ts,tsx}",
      "./src/components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // background: "#3038",
          background: "rgb(3, 1, 27)",
          foreground: "#111827",
          primary: "#6B21A8",
          primaryHover: "#7D3DBA",
          "textColor": "#94A3B8"
        }
      },
    },
    plugins: [],
  }