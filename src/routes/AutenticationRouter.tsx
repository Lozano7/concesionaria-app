import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/auth_components/Login';
import Register from '../components/auth_components/Register';

const AutenticationRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<Navigate to='login' replace />} />
    </Routes>
  );
};

export default AutenticationRouter;
