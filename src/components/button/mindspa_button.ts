import React from 'react';
export class Button extends React.Component<ButtonProps> {
    constructor(parameters: ButtonProps) {
        super(parameters);
    }
}
interface ButtonProps {
    label: string;
    onClick: () => void;
}

  