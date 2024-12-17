import React, { useRef } from 'react';
import { cn } from '../../util/classnames-merge';
import { ZephyrColors } from '../../foundation/colors';
import { TooltipDirection } from '.';
import { overlay, themes } from './tooltip.theme';
import { VariantProps } from 'class-variance-authority';

export interface IBaseTooltipProps extends VariantProps<typeof themes> {
  text: string;
  direction: TooltipDirection;
  onClose: () => void;
  onBack?: () => void;
  onNext?: () => void;
  showCloseButton?: boolean;
  showButton?: boolean;
  className?: string;
  backgroundColor?: string;
  textColor?: string; // Optional prop for text color with a default value of white
}

const BaseTooltip: React.FC<IBaseTooltipProps> = ({
  text,
  direction,
  onClose,
  onBack,
  onNext,
  showCloseButton = false,
  showButton = false,
  backgroundColor = ZephyrColors.primaryTint.s10,
  textColor = ZephyrColors.primaryTint.WH, // Default text color is white
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Background Overlay */}
      <div className={cn(overlay)} onClick={onClose}></div>

      {/* Popup Content */}
      <div
        ref={tooltipRef}
        className={cn(themes({ direction }), 'relative  max-w-[500px]')}
        style={{
          backgroundColor,
          '--popup-bg-color': backgroundColor,
        } as React.CSSProperties}
      >
        {showCloseButton && (
          <div className='mb-7'>
            <button
              className="absolute top-2.5 right-2.5 text-secondary-s80 border-none text-2xl cursor-pointer rounded-full transition-colors duration-200 hover:bg-primaryTint-s95 hover:bg-opacity-[0.3] px-1"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
        )}
        {/* Apply dynamic text color */}
        <div className="tooltip-text text-body-md" style={{ color: textColor }}>
          {text}
        </div>

        <div className="tooltip-button-container mt-5 max-w-[400px]">
          {showButton && onBack && (
            <div className='flex justify-between'>
              <button className="tooltip-back-button p-1" onClick={onBack}>
                Back
              </button>
              <button className="tooltip-next-button bg-opacity-[0.1] bg-primaryTint-s95 rounded-lg px-4 py-2" onClick={onNext}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BaseTooltip;
