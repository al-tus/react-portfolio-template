import React from "react";
import './Button.css'
import type {ButtonProps} from './Button.types.ts';

const Button: React.FC<ButtonProps> = ({children, variant, className,}) => {
    return (
        <button className={`btn btn--${variant} ${className || ''}`}>
            {children}
        </button>
    )
}

export { Button }