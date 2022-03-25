import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
}

const NavLinkForm = ({ to, text }: Props) => {
  return (
    <NavLink to={to} className='mt-5 text-slate-100 text-sm'>
      {text}
      <span className='text-red-700 font-bold underline text-base ml-2'>
        Click here
      </span>
    </NavLink>
  );
};

export default NavLinkForm;
