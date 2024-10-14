import React from 'react';

import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** Is this an outline button? */
  outline?: boolean;
  /** Is this a ghost button? */
  ghost?: boolean;
  /** Is this a filled button? */
  filled?: boolean;
  /** Should the button be rounded? */
  rounded?: boolean; // New prop for rounded styles
  /** What background color to use */
  backgroundColor?: string;
  /** What text color to use */
  textColor?: string; // New prop for text color
  /** What border color to use */
  borderColor?: string; // New prop for border color
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  outline = false,
  ghost = false,
  filled = false,
  rounded = true,
  size = 'medium',
  backgroundColor,
  textColor,
  borderColor,
  label,
  ...props
}: ButtonProps) => {
  // Determine the button mode based on props
  const mode = primary 
    ? 'storybook-button--primary' 
    : outline 
    ? 'storybook-button--outline' 
    : ghost 
    ? 'storybook-button--ghost' 
    : filled 
    ? 'storybook-button--filled' 
    : 'storybook-button--secondary';

  // Determine border radius class
  const borderRadius = rounded ? 'storybook-button--rounded' : 'storybook-button--non-rounded';

  // Inline styles for text and border colors
  const styles = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderColor: borderColor,
  };

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, borderRadius].join(' ')}
      style={styles}
      {...props}
    >
      {label}
    </button>
  );
};


