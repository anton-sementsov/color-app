import { useContext, useEffect, useState, createContext, ReactNode } from 'react';
import { getColorObj } from 'features/ColorDashboard/utils';
import { storage } from 'utils';

import { IColor } from 'features/ColorDashboard/types';

interface ContextProps {
    colorList: IColor[],
    storageColorList: IColor[],
    addColor: (hex: string) => void,
    removeColor: (item: IColor) => void,
}

const ColorContextReact = createContext(({} as ContextProps));

export const ColorContext = ({ children }: { children: ReactNode }) => {
    const [colorList, setColorList] = useState<IColor[]>([]);
    const [storageColorList, setStorageColorList] = useState<IColor[]>([])

    useEffect(() => {
        setStorageColorList(storage.get('colorList'));
    }, []);

    const addColor = (hex: string) => {
        setColorList([...colorList, getColorObj(hex)]);
        storage.addObj('colorList', getColorObj(hex));
    }

    const removeColor = ({ hex }: IColor) => {
        const arr: IColor[] = [...storageColorList];
        arr?.splice(arr?.findIndex(item => item.hex === hex), 1);
        setStorageColorList(arr);
        storage.addList('colorList', arr);
    }

    const hook = {
        colorList,
        storageColorList,
        addColor,
        removeColor,
    };

    return (
        <ColorContextReact.Provider value={hook}>
            {children}
        </ColorContextReact.Provider>
    );
};

export const useColors = () => useContext(ColorContextReact);
