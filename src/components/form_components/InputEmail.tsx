interface Props {
  name: string;
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputEmail = ({ name, handleInputChange, value }: Props) => {
  return (
    <input
      autoFocus
      autoComplete='off'
      type='email'
      placeholder='Email'
      className='rounded w-full p-2 mb-4 bg-transparent border-b-2 border-slate-800 outline-none'
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputEmail;
