
import React, { useState } from 'react';
import BaseTooltip, { IBaseTooltipProps } from './base-tooltip';

export enum TooltipDirection {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export const ZepyhrTooltip: React.FC<Omit<IBaseTooltipProps, 'direction'> & { direction: TooltipDirection }> = (props) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    props.onClose();
  };

  if (!visible) return null;

  return (
    <BaseTooltip
      {...props}
      direction={props.direction} // Pass direction with updated types
      onClose={handleClose}
      showCloseButton={props.showCloseButton}
      showButton={props.showButton}
    />
  );
};
 