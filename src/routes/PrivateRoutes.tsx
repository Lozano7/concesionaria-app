import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/index';

interface Props {
  children: JSX.Element;
}

const PrivateRoutes = ({ children }: Props) => {
  const { processBuy } = useSelector(
    (state: RootState) => state.processByVehicle
  );

  return processBuy ? children : <Navigate to='/' replace />;
};

export default PrivateRoutes;
