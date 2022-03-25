import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { getColor } from '../../helpers/getColor';
import { processBuyActions } from '../../store/slices/processBuySlice';
import { useContext, useRef, useState } from 'react';
import { DataVehicleContext } from '../../context/DataVehicleContext';
import Button from '../ui/Button';
import CarruselNavigation from '../ui/CarruselNavigation';

const ColorsScreen = () => {
  const [color, setColor] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  const { vehicleData } = useSelector(
    (state: RootState) => state.vehicleSelected
  );
  const { data } = vehicleData;
  const { colors } = data;

  const { data: dataState } = useContext(DataVehicleContext);

  const handleSelectColor = (item: string) => {
    setColor(item);
  };

  const handleClickButtonResumen = (item: string) => {
    dispatch(processBuyActions.setAddSteps(2));
    dispatch(processBuyActions.setCurretStep(3));
    dispatch(
      processBuyActions.setVehicleDataCustom({
        ...dataState,
        color,
      })
    );

    navigation('/resume', { replace: true });
  };
  const backStep = () => {
    navigation('/customize/packages', { replace: true });
  };

  return (
    <div className='w-full'>
      <CarruselNavigation text='Colores' back={backStep} />
      <div className='w-[65vw] sm:w-[70vw] lg:w-[50vw] mx-auto  mb-[25px]'>
        <div className='w-full flex flex-wrap gap-4 justify-center'>
          {colors.map((item) => (
            <div
              className={`rounded w-24 h-24 ${getColor(item)} cursor-pointer ${
                color === item ? 'border-4 border-x-slate-700' : ''
              }`}
              key={`${uuidv4()}`}
              onClick={() => {
                handleSelectColor(item);
              }}
            ></div>
          ))}
        </div>
        <div className='w-full mt-7'>
          <h3 className='text-center text-lg font-medium'>
            Haga click en un Color
          </h3>
        </div>
        <div className='w-full mt-10 flex justify-center'>
          {color && (
            <Button
              handleClick={handleClickButtonResumen}
              icono='chevron-right'
              text='Ir a Resumen'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorsScreen;
