import React from 'react';
interface ZephyrButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
}
declare const ZephyrButton: React.FC<ZephyrButtonProps>;
export default ZephyrButton;
