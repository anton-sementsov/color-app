import React, { FC, useState } from 'react';
import { InputText } from 'components/UIkit';
import { useColors } from 'features/ColorDashboard/hooks/useColors';
import { ColorList } from 'features/ColorDashboard/components/ColorList/ColorList';
import { filterRgb } from 'features/ColorDashboard/utils'

import { IColor } from 'features/ColorDashboard/types';

import classes from './Boards.module.scss'

export const Board: FC = () => {
    const { storageColorList, colorList, removeColor } = useColors();

    const [filters, setFilters] = useState<IColor>({ r: '0', g: '0', b: '0' });

    const filterChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setFilters({ ...filters, [e.currentTarget.name]: e.currentTarget.value });
    }

    return (
        <div className={classes.filter}>
            <div>
                <InputText label='Red %' nameInput='r' value={filters.r} onChange={filterChangeHandler} />
                <InputText label='Green %' nameInput='g' value={filters.g} onChange={filterChangeHandler} />
                <InputText label='Blue %' nameInput='b' value={filters.b} onChange={filterChangeHandler} />
            </div>
            <div>
                <ColorList title='state' items={colorList} />
                <ColorList title='storage' items={storageColorList} removeHandler={removeColor} />
                <ColorList title='filter' items={storageColorList.filter((item) => filterRgb(item, filters))} />
            </div>
        </div>
    )
}
