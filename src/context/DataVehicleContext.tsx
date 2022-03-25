import { createContext } from 'react';
import { DataContext } from '../types/contex_interfaces/interfaces';

export const DataVehicleContext = createContext<DataContext>({} as DataContext);

interface DataVehicleContextProps {
  children: JSX.Element | JSX.Element[];
  data: DataContext;
}

const DataVehicleProvider = ({ data, children }: DataVehicleContextProps) => {
  return (
    <DataVehicleContext.Provider value={data}>
      {children}
    </DataVehicleContext.Provider>
  );
};

export default DataVehicleProvider;
