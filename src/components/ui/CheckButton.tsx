interface Props {
  text: string;
  id: string;
  value: number;
  name: string;
}
const CheckButton = ({ value, text, id, name }: Props) => {
  return (
    <div className='flex items-center mr-4 mb-4 px-6 pt-2'>
      <input
        id={id}
        type='checkbox'
        name={`radio-check-${name}`}
        className='hidden'
        value={value}
      />
      <label htmlFor={id} className='flex items-center cursor-pointer'>
        <span className='w-4 h-4 inline-block mr-1 border border-grey'></span>
        {text}
      </label>
    </div>
  );
};

export default CheckButton;
