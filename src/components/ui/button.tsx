'use client';

import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    className,
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                'bg-[#1A1A1A] text-white font-montserrat px-6 py-2 rounded-md transition-all duration-200',
                'hover:bg-[#333333]',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;