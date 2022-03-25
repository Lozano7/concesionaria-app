import { Package } from '../../types/api_types/interfaces';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  item: Package;
  children: JSX.Element;
}

const CardItemsCutsomScreen = ({ item, children }: Props) => {
  return (
    <div className='rounded overflow-hidden shadow-lg cursor-pointer glass-card'>
      {item.imgURL && (
        <img
          className='w-full h-[200px] object-cover object-top'
          src={item.imgURL}
          alt={item.name}
        />
      )}
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
        {item.description && (
          <div className='max-h-[200px] overflow-auto pl-6'>
            {item.description.map((text) => (
              <div className='my-2' key={uuidv4()}>
                <span className='text-xs '>{text.trim()}.</span>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default CardItemsCutsomScreen;
