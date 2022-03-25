interface Props {
  name: string;
  seePassword: boolean;
  handleSeePassword: () => void;
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputPassword = ({
  name,
  value,
  seePassword,
  handleSeePassword,
  handleInputChange,
  placeholder,
}: Props) => {
  return (
    <div className='mb-2 rounded w-full flex justify-between border-b-2 border-slate-800 '>
      <input
        type={`${seePassword ? 'text' : 'password'}`}
        placeholder={placeholder}
        className=' w-full p-2 bg-transparent  outline-none'
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      <button type='button' onClick={handleSeePassword}>
        <i className='bx bx-low-vision text-white text-lg'></i>
      </button>
    </div>
  );
};

export default InputPassword;
