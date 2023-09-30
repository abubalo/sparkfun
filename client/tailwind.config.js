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
          backgroud: "#3038",
          primary: "#599",
        }
      },
    },
    plugins: [],
  }