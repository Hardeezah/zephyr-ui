


import { ZephyrTextStyle } from "../textstyle";

function generateTextStyles(styles) {
    const textStyles = {};

    for (const [device, styleSet] of Object.entries(styles)) {
        for (const [name, style] of Object.entries(styleSet)) {
            const styleKey = `${device}-${name.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`;
            textStyles[`fontSize.${styleKey}`] = style.fontSize;
            textStyles[`lineHeight.${styleKey}`] = style.lineHeight;
            textStyles[`fontWeight.${styleKey}`] = style.fontWeight;
        }
    }

    return textStyles;
}

export const zephyrTextStyles = generateTextStyles(ZephyrTextStyle);
