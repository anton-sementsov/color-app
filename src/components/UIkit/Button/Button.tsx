import { ButtonHTMLAttributes, FC } from 'react';
import { ReactNode } from 'react';

import classes from './Button.module.scss';

interface BaseButtonProps {
    label: string;
    primary?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary';
    likeText?: boolean;
    hoverClasses?: string;
}

export type ButtonProps = BaseButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
    const {
        disabled,
        fullWidth,
        icon,
        label,
        primary,
        size = 'medium',
        likeText,
        variant = 'primary',
        ...restProps
    } = props;

    return (
        <button
            data-size={size}
            data-variant={variant}
            data-full-width={fullWidth}
            className={classes.button}
            disabled={disabled}
            {...restProps}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    );
};
