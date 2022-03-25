import { useContext, useEffect, useState } from 'react';
import { DataVehicleContext } from '../../context/DataVehicleContext';
import { Package } from '../../types/api_types/interfaces';
import { DataCurrent } from '../../types/contex_interfaces/interfaces';

interface Props {
  text: string;
  id: string;
  value: number;
  name: string;
  price: {
    prev: number;
    current: number;
  };
  setPrice: (price: { prev: number; current: number }) => void;
  item: Package;
  dataCustom: React.MutableRefObject<DataCurrent>;
}

const RadioButton = ({
  value,
  text,
  id,
  name,
  price,
  setPrice,
  item,
  dataCustom,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dataCustom.current = {
        name: item.name,
        price: item.price || 0,
      };
      setPrice({
        prev: price.current,
        current: value,
      });
    }
  };

  useEffect(() => {
    if (item.price === 0 && dataCustom.current.price === 0) {
      dataCustom.current = {
        name: item.name,
        price: item.price || 0,
      };
    }
  }, []);

  return (
    <div className='flex items-center mr-4 mb-4 px-6 pt-2'>
      <input
        id={id}
        type='radio'
        name={`radio-button-${name}`}
        className='hidden'
        checked={price.current === value}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={id} className='flex items-center cursor-pointer'>
        <span className='w-4 h-4 inline-block mr-1 border border-grey'></span>
        {text}
      </label>
    </div>
  );
};

export default RadioButton;
