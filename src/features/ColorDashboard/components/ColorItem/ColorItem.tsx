import { FC } from 'react'
import { IColor } from 'features/ColorDashboard/types';
import './ColorItem.scss';

interface ColorItemProps {
  item: IColor,
  removeHandler?: (item: IColor) => void
}

export const ColorItem: FC<ColorItemProps> = ({
  item,
  removeHandler
}) => {
  const { hex, r, g, b } = item;

  return (
    <div className='color-item'>
      <div style={{ 'backgroundColor': hex }} className='color-item__sample'></div>
      <div className='color-item__hex'>{`${hex}`}</div>
      <div className='color-item__rgb'>{`rgb(${r},${g},${b})`}</div>
      {removeHandler && <button onClick={() => removeHandler(item)} className='color-item__remove'>X</button>}
    </div>
  )
}
