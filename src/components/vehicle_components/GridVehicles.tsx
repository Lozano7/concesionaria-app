import { AttributesDatum } from '../../types/api_types/interfaces';
import CardVehicle from './CardVehicle';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  vehicles: AttributesDatum[] | undefined;
}

const GridVehicles = ({ vehicles }: Props) => {
  return (
    <div className='w-[85vw] lg:w-[65vw] mx-auto mt-[35px]  sm:mt-[40px] mb-[25px]'>
      <div className='w-full grid grid-cols-1  gap-7 sm:grid-cols-2'>
        {vehicles?.map((vehicle) => (
          <CardVehicle key={`${uuidv4()}`} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default GridVehicles;
