import { FC } from 'react';
import { ColorItem } from 'features/ColorDashboard/components/ColorItem';

import { IColor } from 'features/ColorDashboard/types';

interface ColorListProps {
    items: IColor[],
    title: string,
    removeHandler?: (item: IColor) => void
}

export const ColorList: FC<ColorListProps> = ({ items, title, removeHandler }) => {
    return (
        <>
            <h1>{title}</h1>
            {items.map((item, index) => {
                const id = `${title.toLocaleLowerCase()}_${index}`
                return (
                    <ColorItem
                        id={id}
                        item={item}
                        removeHandler={removeHandler}
                    />
                );
            })}
        </>
    );
};