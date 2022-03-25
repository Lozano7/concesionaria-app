interface Props {
  handleClick: (value?: any) => void;
  text: string;
  icono: string;
}
const Button = ({ handleClick, text, icono }: Props) => {
  return (
    <button
      className='rounded border-2 border-slate-700 py-1 px-2 text-sm font-semibold flex justify-center items-center'
      onClick={handleClick}
    >
      {text}
      <i className={`bx bx-${icono} ml-1 text-base font-medium`}></i>
    </button>
  );
};

export default Button;
