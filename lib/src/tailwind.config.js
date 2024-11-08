/** @type {import('tailwindcss').Config} */
import { ZephyrColors } from "./foundation/colors";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../lib/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...ZephyrColors,
      },
    },
  },
  plugins: [],
};
