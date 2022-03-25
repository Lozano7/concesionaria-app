import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/index';
import { processBuyActions } from '../../store/slices/processBuySlice';
import CarruselNavigation from '../ui/CarruselNavigation';

const Specifications = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { vehicleData } = useSelector(
    (state: RootState) => state.vehicleSelected
  );

  const { data, imgURL, name } = vehicleData;
  const { specifications, age } = data;

  const navigate = useNavigate();

  const nextStep = () => {
    navigate('/customize/power');
  };

  useEffect(() => {
    dispatch(
      processBuyActions.setVehicleSelectedToByBasicAgeSpecifications({
        age,
        specifications,
      })
    );
  }, []);

  return (
    <div className='w-full'>
      <CarruselNavigation text='Especificaciones' next={nextStep} />
      <div className='w-[80vw]  sm:w-[400px] mx-auto mt-4 mb-11 '>
        <div className='rounded overflow-hidden shadow-lg cursor-pointer glass-card animate__animated animate__fadeIn'>
          <img
            className='w-full object-cover object-center'
            src={imgURL}
            alt={name}
          />
          <div className='px-6 py-4 h-[400px] overflow-auto'>
            <div className='font-bold text-xl mb-2'>{name}</div>
            <div className='font-bold text-base mb-2'>{age}</div>

            {specifications?.map((specification) => (
              <div className='my-2' key={specification}>
                <span className='text-base '>{specification.trim()}.</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
