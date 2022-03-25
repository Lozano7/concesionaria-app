import { Navigate, Route, Routes } from 'react-router-dom';
import AccesoriesScreen from '../components/customScreen_components/AccesoriesScreen';
import ColorsScreen from '../components/customScreen_components/ColorsScreen';
import PackagesScreen from '../components/customScreen_components/PackagesScreen';
import PowerScreen from '../components/customScreen_components/PowerScreen';
import Price from '../components/customScreen_components/Price';
import Specifications from '../components/customScreen_components/Specifications';
import CarruselNavigation from '../components/ui/CarruselNavigation';

const CustomRouter = () => {
  return (
    <div className='w-full min-h-[650px] flex flex-col'>
      {/* <CarruselNavigation /> */}
      <Price />

      <Routes>
        <Route path='/specifications' element={<Specifications />} />
        <Route path='/power' element={<PowerScreen />} />
        <Route path='/packages' element={<PackagesScreen />} />
        <Route path='/colors' element={<ColorsScreen />} />
        <Route path='/*' element={<Navigate to='specifications' />} />
      </Routes>
    </div>
  );
};

export default CustomRouter;
