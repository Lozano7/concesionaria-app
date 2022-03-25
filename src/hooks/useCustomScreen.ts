import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import { DataCurrent } from '../types/contex_interfaces/interfaces';

const initialStateDataCustom = {
  motor: {
    name: '',
    price: 0,
  },
  transmission: {
    name: '',
    price: 0,
  },
  traction: {
    name: '',
    price: 0,
  },
  packages: {
    name: '',
    price: 0,
  },
  accessories: [],
  color: '',
};

const useCustomScreen = () => {
  const { vehicleData } = useSelector(
    (state: RootState) => state.vehicleSelected
  );
  const { data: dataVehicle } = vehicleData;
  const { price } = dataVehicle;
  const initialState = {
    price,
    ...initialStateDataCustom,
  };

  const [data, setData] = useState(initialState);

  const handleDataCustomChange = (name: string, value: DataCurrent) => {
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleDataPowerChange = ({
    motor,
    traction,
    transmission,
  }: {
    motor: DataCurrent;
    transmission: DataCurrent;
    traction: DataCurrent;
  }) => {
    setData({
      ...data,
      motor,
      traction,
      transmission,
    });
  };
  const handleDataPackagesChange = (packages: DataCurrent) => {
    setData({
      ...data,
      packages,
    });
  };
  const handleDataPriceChange = (value: number) => {
    setData({
      ...data,
      price: data.price + value,
    });
  };
  const handleDataColorChange = (value: string) => {
    setData({
      ...data,
      color: value,
    });
  };
  const resetData = () => {
    setData(initialState);
  };
  return {
    data,
    handleDataCustomChange,
    handleDataPriceChange,
    handleDataColorChange,
    handleDataPowerChange,
    handleDataPackagesChange,
  };
};

export default useCustomScreen;
