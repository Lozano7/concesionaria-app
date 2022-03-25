import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from '../../../firebase/config';
import Swal from 'sweetalert2';
import { NavigateFunction } from 'react-router-dom';

interface UserAuthRegisterWithEmail {
  name: string;
  email: string;
  password: string;
  reset: () => void;
  navigate: NavigateFunction;
  rediret: string;
}

export const registerWithEmailAndPassword = createAsyncThunk(
  'userAuth/registerWithEmailAndPassword',
  async (userInfo: UserAuthRegisterWithEmail) => {
    try {
      const { email, password, name, reset, navigate, rediret } = userInfo;
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid } = user;
      await setDoc(doc(db, 'users', uid), {
        uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      reset();
      navigate(rediret, { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = ('' + error.message)
          .slice(22, -2)
          .replace(')', '')
          .replace(/-/g, ' ');
        Swal.fire({
          title: 'Error',
          text: errorMessage,
          icon: 'error',
          confirmButtonColor: '#334155',
        });
      }
    }
  }
);
