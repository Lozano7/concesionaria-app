interface Props {
  children: JSX.Element | JSX.Element[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
}
const Form = ({ children, onSubmit, title }: Props) => {
  return (
    <div className='glass'>
      <div className='w-72 p-5 sm:w-96'>
        <form onSubmit={onSubmit}>
          <div className='w-full flex flex-col justify-center items-center mb-0'>
            <h1 className='text-white text-center text-3xl mb-4 font-medium'>
              {title}
            </h1>
            {children}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
