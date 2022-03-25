import { signOut } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase/config';
import { RootState, AppDispatch } from '../../store/index';
import { userActions } from '../../store/slices/userSlice';
import Button from '../ui/Button';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.userAuth);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const handleLogout = async () => {
    if (auth.currentUser) {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        isOnline: false,
      });
      await signOut(auth);
      dispatch(userActions.logout());
    }
  };

  const handleClickLogin = () => {
    localStorage.setItem('redirect', location.pathname);
    navigate('/auth/login');
  };
  return (
    <header className='w-full h-[65px] flex justify-between items-center  px-4 mb-7 sm:px-5 sm:mb-0 '>
      <h1 className='text-2xl font-bold'>KIA</h1>
      <div className='flex items-center'>
        {isLoggedIn ? (
          <>
            <h3 className='hidden sm:block sm:mr-3 sm:text-lg sm:font-medium'>
              {auth.currentUser?.email}
            </h3>
            <Button handleClick={handleLogout} text='Logout' icono='log-out' />
          </>
        ) : (
          <Button handleClick={handleClickLogin} text='Login' icono='log-in' />
        )}
      </div>
    </header>
  );
};

export default Header;
