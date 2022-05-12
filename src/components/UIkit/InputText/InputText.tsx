import { FC } from 'react';

import classes from './InputText.module.scss';

interface InputProps {
    label?: string,
    id?: string,
    error?: string,
    nameInput?: string
    value?: string
    fullWidth?: boolean,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const InputText: FC<InputProps> = ({
    label,
    id,
    error,
    nameInput,
    value,
    fullWidth,
    ...restProps
}) => {

    return (
        <div data-full-width={fullWidth} className={classes.wrapper}>
            {label && (
                <label className={classes.label} htmlFor={id} >
                    {label}
                </label>
            )}
            <input
                type='text'
                className={classes.input}
                name={nameInput}
                value={value}
                {...restProps}
            />
            {error && <div className={classes.error}>{error}</div>}
        </div>
    )
};
