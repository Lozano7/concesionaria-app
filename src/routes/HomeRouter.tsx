import { Navigate, Route, Routes } from 'react-router-dom';
import CustomScreen from '../components/customScreen_components/CustomScreen';
import ResumenScreen from '../components/resumen_components/ResumenScreen';
import VehiclesScreen from '../components/vehicle_components/VehiclesScreen';
import PrivateRoutes from './PrivateRoutes';

const HomeRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<VehiclesScreen />} />
      <Route
        path='customize/*'
        element={
          <PrivateRoutes>
            <CustomScreen />
          </PrivateRoutes>
        }
      />
      <Route
        path='resume'
        element={
          <PrivateRoutes>
            <ResumenScreen />
          </PrivateRoutes>
        }
      />
      <Route
        path='buy-online'
        element={
          <PrivateRoutes>
            <h1>buy-online</h1>
          </PrivateRoutes>
        }
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default HomeRouter;
