import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Autentication from '../pages/Autentication';
import Home from '../pages/Home';
const AppRouter = () => {
  return (
    <div className='min-h-screen min-w-full max-w-full font-quicksand bg-white-blue'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/auth/*' element={<Autentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
