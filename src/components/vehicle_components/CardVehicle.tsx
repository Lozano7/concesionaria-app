import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { processBuyActions } from '../../store/slices/processBuySlice';
import { vehicleSelectSliceActions } from '../../store/slices/vehicleSeletedSlice';
import { AttributesDatum, VehicleData } from '../../types/api_types/interfaces';

interface Props {
  vehicle: AttributesDatum;
}
const CardVehicle = ({ vehicle }: Props) => {
  const { data, name, imgURL } = vehicle;
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();

  const handleSeletedVehicle = (data: VehicleData) => {
    dispatch(processBuyActions.setActiveProcessBy());
    dispatch(vehicleSelectSliceActions.setVehicleSelected(vehicle));
    dispatch(processBuyActions.setAddSteps(1));
    dispatch(processBuyActions.setCurretStep(2));
    dispatch(
      processBuyActions.setVehicleSelectedToByBasicInfoNameImg({
        name,
        imgURL,
      })
    );

    navigation('/customize');
  };
  return (
    <div
      className='rounded overflow-hidden shadow-lg cursor-pointer glass-card animate__animated animate__fadeIn'
      onClick={() => handleSeletedVehicle(data)}
    >
      <img
        className='w-full min-h-[220px] object-cover object-center'
        src={imgURL}
        alt={name}
      />
      <div className='px-6 py-4 overflow-auto'>
        <div className='font-bold text-xl mb-2'>{name}</div>
      </div>
    </div>
  );
};

export default CardVehicle;
