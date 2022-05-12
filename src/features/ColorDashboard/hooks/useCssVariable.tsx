import { useEffect } from 'react';

export const useCssBgColor = ({ id, color = '' }: { id: string, color?: string }) => {
    useEffect(() => {
        document.getElementById(id)!.style.background = color;
    }, []);

    return null;
};
