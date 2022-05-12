import { IColor } from 'features/ColorDashboard/types';

export const storage = {

  addObj: (key: string, value: IColor) => {
    if (!value) return;
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    localStorage.setItem(key, JSON.stringify([...data, value]));
  },

  get: (key: string) => {
    const data: string | null | string[] = localStorage.getItem(key) || '[]';
    return JSON.parse(data);
  },

  addList: (key: string, items: IColor[]) => {
    localStorage.setItem(key, JSON.stringify(items));
  }
  
};
