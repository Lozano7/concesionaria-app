import React, { useContext, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DataVehicleContext } from '../../context/DataVehicleContext';
import { RootState } from '../../store';
import { DataCurrent } from '../../types/contex_interfaces/interfaces';
import CarruselNavigation from '../ui/CarruselNavigation';
import GridCustomSteps from './GridCustomSteps';

const PackagesScreen = () => {
  const { vehicleData } = useSelector(
    (state: RootState) => state.vehicleSelected
  );
  const { handleDataPackagesChange } = useContext(DataVehicleContext);
  const { data } = vehicleData;
  const { packages } = data;
  const navigate = useNavigate();
  const packagesCustomData = useRef<DataCurrent>({
    name: '',
    price: 0,
  });
  const backStep = () => {
    handleDataPackagesChange(packagesCustomData.current);
    navigate('/customize/power', { replace: true });
  };
  const nextStep = () => {
    handleDataPackagesChange(packagesCustomData.current);
    navigate('/customize/colors', { replace: true });
  };
  return (
    <>
      <CarruselNavigation text='Paquetes' back={backStep} next={nextStep} />
      <GridCustomSteps
        data={packages}
        title='Packages'
        header={false}
        dataCustom={packagesCustomData}
      />
    </>
  );
};

export default PackagesScreen;
