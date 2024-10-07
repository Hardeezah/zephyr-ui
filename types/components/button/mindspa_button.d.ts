import React from 'react';
export declare class Button extends React.Component<ButtonProps> {
    constructor(parameters: ButtonProps);
}
interface ButtonProps {
    label: string;
    onClick: () => void;
}
export {};
