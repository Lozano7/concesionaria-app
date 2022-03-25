import { CaseReducerActions } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Step } from '../../helpers/steps';
import { RootState, AppDispatch } from '../../store/index';
import { processBuyActions } from '../../store/slices/processBuySlice';

interface Props {
  steps: Step[];
}

const StepsToFollow = ({ steps }: Props) => {
  const navigate = useNavigate();
  const { curretStep, stepsComplete } = useSelector(
    (state: RootState) => state.processByVehicle
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleNavigate = (step: Step) => {
    if (stepsComplete.includes(step.stepNumber)) {
      dispatch(processBuyActions.setCurretStep(step.stepNumber));
      dispatch(processBuyActions.setDeleteSteps(step.stepNumber));
      navigate(step.to, { replace: true });
    } else {
      Swal.fire({
        title: 'Warning',
        text: 'Complete el paso actual para continuar',
        icon: 'warning',
        confirmButtonColor: '#334155',
        confirmButtonText: 'Sí, continuar',
      });
    }
  };
  return (
    <div className='w-full flex justify-center items-center flex-wrap mt-[15px] sm:mt-[8px]'>
      {steps.map((step, index) => (
        <button
          key={`${step.to}-${index}`}
          className={`text-base font-medium m-3 sm:mx-5 ${
            curretStep === step.stepNumber &&
            'font-semibold border-b-2 border-[#f04]'
          }`}
          onClick={() => handleNavigate(step)}
        >
          {step.text}
        </button>
      ))}
    </div>
  );
};

export default StepsToFollow;
