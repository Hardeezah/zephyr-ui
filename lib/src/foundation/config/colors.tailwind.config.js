


import { ZephyrColors } from "../colors";

function generateColorConfig(colorClasses) {
    const colors = {};

    for (const [category, colorClass] of Object.entries(colorClasses)) {
        for (const [shade, value] of Object.entries(colorClass)) {
            const colorKey = `${category}-${shade.toLowerCase()}`;
            colors[colorKey] = value;
        }
    }

    return colors;
}

export const zephyrTailwindColors = generateColorConfig({
    primaryTint: ZephyrColors.primaryTint,
    primaryTone: ZephyrColors.primaryTone,
    secondary: ZephyrColors.secondary,
    error: ZephyrColors.error,
    neutral: ZephyrColors.neutral,
});

