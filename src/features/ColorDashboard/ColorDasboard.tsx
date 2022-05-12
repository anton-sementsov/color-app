import { FC } from 'react'
import { InputColor, Board } from './components';
import { ColorContext } from 'features/ColorDashboard/hooks/useColors';

export const ColorDashboard: FC = () => {
    return (
        <ColorContext>
            <InputColor />
            <Board />
        </ColorContext>
    )
}
