import { Package } from '../../types/api_types/interfaces';
import { v4 as uuidv4 } from 'uuid';
import CheckButton from '../ui/CheckButton';

interface Props {
  item: Package;
  nameCheckButton: string;
}

const CardItemsAccesories = ({ item, nameCheckButton }: Props) => {
  return (
    <div className='rounded overflow-hidden shadow-lg cursor-pointer glass-card animate__animated animate__fadeIn'>
      <div className='py-4 '>
        <div className='font-bold text-lg mb-2 px-6 '>{item.name}</div>
        <div className='font-bold text-sm mb-2 flex items-center px-6 '>
          {item.price ? (
            <>
              Adicional: <i className='bx bx-dollar'></i>
              {item.price}
            </>
          ) : (
            'Incluido'
          )}
        </div>
        <CheckButton
          id={`${item.name}-${item.price}}`}
          name={nameCheckButton}
          text=' Agregar al carrito'
          value={item.price || 0}
        />
      </div>
    </div>
  );
};
export default CardItemsAccesories;
