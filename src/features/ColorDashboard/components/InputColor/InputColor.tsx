import { useState, FC } from 'react';
import { Button, InputText } from 'components/UIkit';
import { inputColorValidation } from 'features/ColorDashboard/utils';
import { useColors } from 'features/ColorDashboard/hooks/useColors';

import './InputColor.scss';

export const InputColor: FC = () => {
    const [color, setColor] = useState<string>('');
    const [error, setError] = useState<string>('');

    const { addColor } = useColors();

    const handleSubmit = () => {
        let hex = color.toUpperCase();
        const validation = inputColorValidation(color)
        if (!validation) {
            addColor(hex);
        }
        setError(validation);
    };

    return (
        <div className='color-input'>
            <form className='color-input__form'>
                <InputText
                    label='color'
                    nameInput="color"
                    error={error}
                    value={color}
                    onChange={(e) => {
                        return setColor(e.currentTarget.value);
                    }}
                />
                <div className='color-input__button-wrapper' onClick={handleSubmit}>
                    <Button label='+ Add color' />
                </div>
            </form>
        </div>
    )
};
