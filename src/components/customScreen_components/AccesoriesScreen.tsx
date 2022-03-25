import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import GridCustomSteps from './GridCustomSteps';

const AccesoriesScreen = () => {
  const { vehicleData } = useSelector(
    (state: RootState) => state.vehicleSelected
  );
  const { data } = vehicleData;
  const { accessories } = data;
  const { kit, 'mant-prepaid': maintenance, individual } = accessories;

  return (
    <>
      <GridCustomSteps data={kit} title='Kit' header={true} />
      <GridCustomSteps data={individual} title='Individuales' header={true} />
      {maintenance && (
        <GridCustomSteps
          data={maintenance}
          title='Mant. Prepagados'
          header={true}
        />
      )}
    </>
  );
};

export default AccesoriesScreen;
