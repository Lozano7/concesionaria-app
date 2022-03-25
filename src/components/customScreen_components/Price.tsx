import { useContext } from 'react';
import { DataVehicleContext } from '../../context/DataVehicleContext';

interface Props {
  price: number;
}

const Price = () => {
  const { data } = useContext(DataVehicleContext);
  const { price } = data;
  return (
    <div className='sm:w-[65vw] flex justify-end mx-auto mb-5'>
      <span className='mt-4 sm:my-0 border-b-2 border-slate-800 text-[17px] sm:text-[18px] font-medium flex items-center'>
        <i className='bx bx-dollar'></i> {price}
      </span>
    </div>
  );
};

export default Price;
