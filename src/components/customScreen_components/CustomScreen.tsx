import DataVehicleProvider from '../../context/DataVehicleContext';
import useCustomScreen from '../../hooks/useCustomScreen';
import CustomRouter from '../../routes/CustomRouter';

const CustomScreen = () => {
  const {
    data,
    handleDataCustomChange,
    handleDataPriceChange,
    handleDataColorChange,
    handleDataPackagesChange,
    handleDataPowerChange,
  } = useCustomScreen();

  return (
    <DataVehicleProvider
      data={{
        data,
        handleDataCustomChange,
        handleDataPriceChange,
        handleDataColorChange,
        handleDataPackagesChange,
        handleDataPowerChange,
      }}
    >
      <CustomRouter />
    </DataVehicleProvider>
  );
};

export default CustomScreen;
