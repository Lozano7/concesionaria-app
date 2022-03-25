import { ThreeDots } from 'react-loader-spinner';

interface Props {
  message?: string;
}

const Spinner = ({ message = '' }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <ThreeDots color='#f04' height={100} width={100} />
      <p className='text-white text-lg text-center px-2'>{message}</p>
    </div>
  );
};

export default Spinner;
