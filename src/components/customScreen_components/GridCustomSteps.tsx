import { Package } from '../../types/api_types/interfaces';
import CardItemsCutsomScreen from './CardItemsCutsomScreen';
import { v4 as uuidv4 } from 'uuid';
import CardItemsAccesories from './CardItemsAccesories';
import { useContext, useEffect, useRef, useState } from 'react';
import { DataVehicleContext } from '../../context/DataVehicleContext';
import RadioButton from '../ui/RadioButton';
import { DataCurrent } from '../../types/contex_interfaces/interfaces';
import { getInitialPrice } from '../../helpers/getInitialPrice';

interface Props {
  data: Package[];
  title: string;
  header: boolean;
  dataCustom: React.MutableRefObject<DataCurrent>;
}

const GridCustomSteps = ({ data, title, header, dataCustom }: Props) => {
  const { handleDataPriceChange, data: dataState } =
    useContext(DataVehicleContext);

  const [price, setPrice] = useState({
    prev: getInitialPrice(title, dataState),
    current: getInitialPrice(title, dataState),
  });

  useEffect(() => {
    if (price.prev !== 0 && price.current === 0) {
      console.log('se disminuyo: ', price.prev);
      handleDataPriceChange(-price.prev);
    } else if (price.prev === 0 && price.current !== 0) {
      handleDataPriceChange(price.current);
    }
  }, [price.current]);

  return (
    <div className='w-[65vw] sm:w-[70vw] lg:w-[50vw] mx-auto  mb-[25px]'>
      {header && (
        <h3 className='capitalize text-center mb-7 text-2xl font-medium'>
          {title === 'transmission'
            ? 'Transmisión'
            : title === 'traction'
            ? 'Tracción'
            : 'Motor'}
        </h3>
      )}
      {data.length > 0 ? (
        <div className='w-full grid grid-cols-1  gap-7 sm:grid-cols-2'>
          {data?.map((item, index) =>
            item.description || title === 'Mant. Prepagados' ? (
              <div key={`${uuidv4()}`}>
                <CardItemsCutsomScreen item={item}>
                  <RadioButton
                    id={`${item.name}-${index}}`}
                    name={title.toLowerCase()}
                    text=' Agregar al carrito'
                    value={item.price || 0}
                    setPrice={setPrice}
                    price={price}
                    item={item}
                    dataCustom={dataCustom}
                  />
                </CardItemsCutsomScreen>
              </div>
            ) : (
              <div key={`${uuidv4()}`}>
                <CardItemsAccesories item={item} nameCheckButton={item.name} />
              </div>
            )
          )}
        </div>
      ) : (
        <div className='w-full grid grid-cols-1  gap-7 '>
          <h3 className='text-center'>
            No hay <strong>{title} de accesorios registrados</strong>{' '}
          </h3>
        </div>
      )}
    </div>
  );
};

export default GridCustomSteps;
