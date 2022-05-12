import { FC } from 'react'
import { IColor } from 'features/ColorDashboard/types';
import { useCssBgColor } from 'features/ColorDashboard/hooks/useCssVariable';

import './ColorItem.scss';

interface ColorItemProps {
  id: string,
  item: IColor,
  removeHandler?: (item: IColor) => void
}

export const ColorItem: FC<ColorItemProps> = ({
  id,
  item,
  removeHandler
}) => {
  const { hex, r, g, b } = item;

  useCssBgColor({
    id: id,
    color: hex,
  })

  return (
    <div className='color-item'>
      <div className='color-item__sample' id={id}></div>
      <div className='color-item__hex'>{`${hex}`}</div>
      <div className='color-item__rgb'>{`rgb(${r},${g},${b})`}</div>
      {removeHandler && <button onClick={() => removeHandler(item)} className='color-item__remove'>X</button>}
    </div>
  )
}
