import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';

interface Props {
  text: string;
}

const ButtonSubmit = ({ text }: Props) => {
  const { loading } = useSelector((state: RootState) => state.userAuth);
  return (
    <button
      className={`${
        loading && 'opacity-40'
      } text-white py-1 px-3 rounded-md border-2 border-gray-300 flex  justify-center items-center mb-5`}
      type='submit'
      disabled={loading}
    >
      <i className='bx bx-log-in text-lg mr-1'></i> {text}
    </button>
  );
};

export default ButtonSubmit;
