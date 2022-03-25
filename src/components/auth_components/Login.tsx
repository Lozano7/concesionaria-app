import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Form from '../form_components/Form';
import { AppDispatch, RootState } from '../../store/index';
import {
  loginWithEmail,
  loginWithGoogle,
} from '../../store/slices/userAsyncActions/LoginAsyncActions';
import validarForm from '../../helpers/validateForm';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import InputPassword from '../form_components/InputPassword';
import InputEmail from '../form_components/InputEmail';
import NavLinkForm from '../form_components/NavLinkForm';
import ButtonSubmit from '../form_components/ButtonSubmit';

interface FormValues {
  email: string;
  password: string;
}

const initialFormState: FormValues = {
  email: '',
  password: '',
};

const Login = () => {
  const { formValues, handleInputChange, reset } = useForm(initialFormState);
  const { email, password } = formValues;
  const [seePassword, setSeePassword] = useState(false);

  const { loading } = useSelector((state: RootState) => state.userAuth);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const rediret: string = localStorage.getItem('redirect') || '/';
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = validarForm(formValues);
    if (error) {
      Swal.fire('Error', error, 'error');
    } else {
      dispatch(loginWithEmail({ email, password, reset, navigate, rediret }));
    }
  };

  const handleLoginWithGoogle = async () => {
    dispatch(loginWithGoogle({ navigate, reset, rediret }));
  };

  return (
    <Form onSubmit={handleOnSubmit} title='Login'>
      <div className='mb-4 w-full'>
        <InputEmail
          name='email'
          value={email}
          handleInputChange={handleInputChange}
        />
        <InputPassword
          placeholder='Password'
          handleInputChange={handleInputChange}
          name='password'
          value={password}
          handleSeePassword={() => setSeePassword((prev) => !prev)}
          seePassword={seePassword}
        />
      </div>
      <ButtonSubmit text='Sign in' />
      <button
        className={`${
          loading && 'opacity-40'
        } text-white py-1 px-3 rounded-md border-2 border-gray-300 flex  justify-center items-center`}
        type='button'
        onClick={handleLoginWithGoogle}
        disabled={loading}
      >
        <i className='bx bxl-google text-lg mr-1'></i> Sign in with Google
      </button>
      <NavLinkForm to='/auth/register' text={`You don't have an account?`} />
    </Form>
  );
};

export default Login;
