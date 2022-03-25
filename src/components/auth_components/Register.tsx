import { NavLink, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Form from '../form_components/Form';
import { AppDispatch } from '../../store/index';
import { useDispatch } from 'react-redux';
import { registerWithEmailAndPassword } from '../../store/slices/userAsyncActions/RegisterAsyncActions';
import validarForm from '../../helpers/validateForm';
import Swal from 'sweetalert2';
import InputPassword from '../form_components/InputPassword';
import InputEmail from '../form_components/InputEmail';
import { useState } from 'react';
import NavLinkForm from '../form_components/NavLinkForm';
import ButtonSubmit from '../form_components/ButtonSubmit';

interface FormRegisterValues {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

const initialFormState: FormRegisterValues = {
  email: '',
  password: '',
  name: '',
  confirmPassword: '',
};

const Register = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [seePasswordConfirm, setSeePasswordConfirm] = useState(false);

  const { formValues, handleInputChange, reset } = useForm(initialFormState);
  const { email, password, name, confirmPassword } = formValues;

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const rediret: string = localStorage.getItem('redirect') || '/';

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = validarForm(formValues);
    if (error) {
      Swal.fire('Error', error, 'error');
    } else {
      dispatch(
        registerWithEmailAndPassword({
          email,
          password,
          name,
          reset,
          navigate,
          rediret,
        })
      );
    }
  };
  return (
    <Form onSubmit={handleOnSubmit} title='Register'>
      <div className='mb-4'>
        <input
          autoFocus
          autoComplete='off'
          type='text'
          placeholder='Name'
          className='text-white rounded w-full p-2 mb-4 bg-transparent border-b-2 border-slate-800 outline-none'
          name='name'
          value={name}
          onChange={handleInputChange}
        />
        <InputEmail
          name='email'
          value={email}
          handleInputChange={handleInputChange}
        />
        <InputPassword
          placeholder='Password'
          name='password'
          value={password}
          handleInputChange={handleInputChange}
          seePassword={seePassword}
          handleSeePassword={() => setSeePassword((prev) => !prev)}
        />
        <InputPassword
          placeholder='Confirm Password'
          name='confirmPassword'
          value={confirmPassword}
          handleInputChange={handleInputChange}
          seePassword={seePasswordConfirm}
          handleSeePassword={() => setSeePasswordConfirm((prev) => !prev)}
        />
      </div>
      <ButtonSubmit text='Register' />
      <NavLinkForm to='/auth/login' text='You have an account?' />
    </Form>
  );
};

export default Register;
