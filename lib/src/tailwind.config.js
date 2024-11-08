/** @type {import('tailwindcss').Config} */
import { ZephyrColors } from "./foundation/colors";
import { ZephyrTextStyles } from "./foundation/textstyle";

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
      fontSize: {
        "display-sm": ZephyrTextStyles.desktop.displaySmall.fontSize,
        "headline-lg": ZephyrTextStyles.desktop.headlineLarge.fontSize,
        "headline-md": ZephyrTextStyles.desktop.headlineMedium.fontSize,
        "headline-sm": ZephyrTextStyles.desktop.headlineSmall.fontSize,
        "body-lg": ZephyrTextStyles.desktop.bodyLarge.fontSize,
        "body-md": ZephyrTextStyles.desktop.bodyMedium.fontSize,
        "body-sm": ZephyrTextStyles.desktop.bodySmall.fontSize,
      },
      lineHeight: {
        "display-sm": ZephyrTextStyles.desktop.displaySmall.lineHeight,
        "headline-lg": ZephyrTextStyles.desktop.headlineLarge.lineHeight,
        "headline-md": ZephyrTextStyles.desktop.headlineMedium.lineHeight,
        "headline-sm": ZephyrTextStyles.desktop.headlineSmall.lineHeight,
        "body-lg": ZephyrTextStyles.desktop.bodyLarge.lineHeight,
        "body-md": ZephyrTextStyles.desktop.bodyMedium.lineHeight,
        "body-sm": ZephyrTextStyles.desktop.bodySmall.lineHeight,
      },
      fontWeight: {
        "display-sm": ZephyrTextStyles.desktop.displaySmall.fontWeight,
        "headline-lg": ZephyrTextStyles.desktop.headlineLarge.fontWeight,
        "headline-md": ZephyrTextStyles.desktop.headlineMedium.fontWeight,
        "headline-sm": ZephyrTextStyles.desktop.headlineSmall.fontWeight,
        "body-lg": ZephyrTextStyles.desktop.bodyLarge.fontWeight,
        "body-md": ZephyrTextStyles.desktop.bodyMedium.fontWeight,
        "body-sm": ZephyrTextStyles.desktop.bodySmall.fontWeight,
      },
      fontFamily: {
        "cabinet-grotesk": ["Cabinet Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
