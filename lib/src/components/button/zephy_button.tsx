import React from 'react';
import { ZephyrColors } from '../../foundation/colors';

interface ZephyrButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const ZephyrButton: React.FC<ZephyrButtonProps> = ({
  variant,
  children,
  onClick,
  isLoading = false,
  disabled = false,
}) => {
  const baseStyles = "relative px-4 py-2 rounded-full font-medium transition-colors duration-200";
  
  const primaryStyles = `
    ${baseStyles}
    bg-[${ZephyrColors.primaryTint.s20}] text-[${ZephyrColors.primaryTint.WH}]
    hover:bg-[${ZephyrColors.primaryTint.s10}]
    disabled:bg-[${ZephyrColors.primaryTint.s80}] disabled:text-[${ZephyrColors.primaryTint.s20}]
  `;
  
  const secondaryStyles = `
    ${baseStyles}
    bg-[${ZephyrColors.primaryTint.WH}] text-[${ZephyrColors.primaryTint.s20}] 
    border border-[${ZephyrColors.primaryTint.s20}]
    hover:bg-[${ZephyrColors.primaryTint.s95}]
    disabled:bg-[${ZephyrColors.neutral.s95}] disabled:text-[${ZephyrColors.neutral.s40}] 
    disabled:border-[${ZephyrColors.neutral.s80}]
  `;

  const buttonStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return React.createElement(
    'div',
    {
      className: buttonStyles,
      onClick: disabled || isLoading ? undefined : onClick,
      role: 'button',
      tabIndex: disabled || isLoading ? -1 : 0,
      'aria-disabled': disabled || isLoading,
    },
    isLoading && React.createElement(
      'span',
      { className: 'inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2' }
    ),
    children
  );
};

export default ZephyrButton;
