/** @type {import('tailwindcss').Config} */
import { zephyrTailwindColors } from "./foundation/config/colors.tailwind.config";
import { zephyrTextStyles } from "./foundation/config/textstyle.tailwind.config";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../lib/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: zephyrTailwindColors,
      ...zephyrTextStyles,
      fontFamily: {
        "cabinet-grotesk": ["Cabinet Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
