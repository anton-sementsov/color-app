import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';

interface BaseButtonProps {
    label: string;
    primary?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
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

    const mainCn = cn(
        classes.button,
        classes[size],
        classes[variant],
        fullWidth && classes.fullWidth
    );

    return (
        <button
            className={
                mainCn
            }
            disabled={disabled}
            {...restProps}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    );
};
