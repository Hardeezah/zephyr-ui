/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#23A07080",
          200: "#23A070",
          300: "#155F43",
          400: "#0E402D",
        },
      },
    },
  },
  plugins: [],
};
