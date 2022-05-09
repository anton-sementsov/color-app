import { IColor } from './../types/index';
export const getColorObj = (hex: string) => {
    const rgb: string[] | null = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (rgb) {
    return {
      hex,
      r: parseInt(rgb[1], 16).toString(),
      g: parseInt(rgb[2], 16).toString(),
      b: parseInt(rgb[3], 16).toString(),
    }
  }

  return {
    hex,
    r: '0',
    g: '0',
    b: '0',
  }
}

export const filterRgb = (item: IColor, filters: IColor) => {
  const { r, g, b } = item
  const MAX_RGB = 255;
  return ((Number(r) * 100 / MAX_RGB) > Number(filters.r) &&
    (Number(g) * 100 / MAX_RGB) > Number(filters.g) &&
    (Number(b) * 100 / MAX_RGB) > Number(filters.b));
}


export const inputColorValidation = (value: string) => {
    const reg = /^#([0-9a-f]{3}){1,2}$/i;
    if (!value) {
      return 'required field';
    }
    if (value.length > 7) {
      return 'too many characters';
    }
    if (value.charAt(0) !== '#') {
      return '`#` except first character';
    }
    if (!reg.test(value)) {
      return 'non valid characters';
    }
    return '';
}


