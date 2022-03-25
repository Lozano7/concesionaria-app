interface Props {
  text: string;
  back?: () => void;
  next?: () => void;
}

const CarruselNavigation = ({ text, back, next }: Props) => {
  return (
    <div className='flex justify-center mb-6'>
      {back && (
        <button className='flex flex-row items-center' onClick={back}>
          <i className='bx bx-chevron-left text-base flex items-center'></i>
          Regresar
        </button>
      )}
      <h3 className='text-lg sm:text-2xl font-medium capitalize mr-4 ml-5 sm:mr-6 sm:ml-7'>
        {text}
      </h3>

      {next && (
        <button className='flex flex-row items-center ' onClick={next}>
          Siguiente
          <i className='bx bx-chevron-right text-base flex items-center'></i>
        </button>
      )}
    </div>
  );
};

export default CarruselNavigation;
