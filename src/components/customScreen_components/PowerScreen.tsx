import { useContext, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/index';
import CarruselNavigation from '../ui/CarruselNavigation';
import GridCustomSteps from './GridCustomSteps';
import { DataCurrent } from '../../types/contex_interfaces/interfaces';
import { DataVehicleContext } from '../../context/DataVehicleContext';

const PowerScreen = () => {
  //Data vehicle Inital
  const { vehicleData } = useSelector(
    (state: RootState) => state.vehicleSelected
  );
  const { data } = vehicleData;
  const { power } = data;
  const { motor, transmission, traction } = power;

  //Data vehicle Custom current
  const { handleDataPowerChange, data: dataCurrent } =
    useContext(DataVehicleContext);
  const {
    motor: motorDataCurrent,
    transmission: transmissionDataCurrent,
    traction: tractionDataCurrent,
  } = dataCurrent;

  const navigate = useNavigate();

  const motorCustomData = useRef<DataCurrent>({
    name: motorDataCurrent.name,
    price: motorDataCurrent.price,
  });
  const transmissionCustomData = useRef<DataCurrent>({
    name: transmissionDataCurrent.name,
    price: transmissionDataCurrent.price,
  });
  const tractionCustomData = useRef<DataCurrent>({
    name: tractionDataCurrent.name,
    price: tractionDataCurrent.price,
  });
  const backStep = () => {
    handleDataPowerChange({
      motor: { ...motorCustomData.current },
      transmission: { ...transmissionCustomData.current },
      traction: { ...tractionCustomData.current },
    });
    navigate('/customize/specifications', { replace: true });
  };
  const nextStep = () => {
    handleDataPowerChange({
      motor: { ...motorCustomData.current },
      transmission: { ...transmissionCustomData.current },
      traction: { ...tractionCustomData.current },
    });
    navigate('/customize/packages', { replace: true });
  };

  return (
    <>
      <CarruselNavigation text='Potencia' back={backStep} next={nextStep} />
      <GridCustomSteps
        data={motor}
        title='Motor'
        header={true}
        dataCustom={motorCustomData}
      />
      <GridCustomSteps
        data={transmission}
        title='transmission'
        header={true}
        dataCustom={transmissionCustomData}
      />

      {traction && (
        <GridCustomSteps
          data={traction}
          title='tracction'
          header={true}
          dataCustom={tractionCustomData}
        />
      )}
    </>
  );
};

export default PowerScreen;
