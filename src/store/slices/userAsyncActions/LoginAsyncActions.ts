import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from '../../../firebase/config';
import Swal from 'sweetalert2';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  reset: () => void;
  navigate: NavigateFunction;
  rediret: string;
}

export const loginWithGoogle = createAsyncThunk(
  'userAuth/loginWithGoogle',
  async ({ navigate, reset, rediret }: Props) => {
    const provider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, provider);
      const { uid, displayName: name, email, photoURL } = user;
      await setDoc(doc(db, 'users', uid), {
        uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
        photoURL,
      });
      reset();
      navigate(rediret, { replace: true });
    } catch (error: any) {
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

interface UserAuthLoginEmail {
  email: string;
  password: string;
  reset: () => void;
  navigate: NavigateFunction;
  rediret: string;
}

export const loginWithEmail = createAsyncThunk(
  'userAuth/loginWithEmail',
  async (userInfo: UserAuthLoginEmail) => {
    try {
      const { email, password, navigate, reset, rediret } = userInfo;
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { uid } = user;
      await updateDoc(doc(db, 'users', uid), {
        isOnline: true,
      });
      reset();
      navigate(rediret, { replace: true });
    } catch (error: any) {
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
