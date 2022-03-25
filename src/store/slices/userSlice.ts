import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  loginWithEmail,
  loginWithGoogle,
} from './userAsyncActions/LoginAsyncActions';
import { registerWithEmailAndPassword } from './userAsyncActions/RegisterAsyncActions';

interface UserLogin {
  isLoggedIn: boolean;
  loading: boolean;
}

const user: UserLogin = {
  isLoggedIn: false,
  loading: false,
};

const userSlice = createSlice({
  initialState: user,
  name: 'userAuth',
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginWithGoogle.fulfilled, (state) => {
      state.isLoggedIn = true;
      state.loading = false;
    });
    builder.addCase(loginWithGoogle.pending, (state) => {
      state.loading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(loginWithGoogle.rejected, (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    });
    builder.addCase(loginWithEmail.fulfilled, (state) => {
      state.isLoggedIn = true;
      state.loading = false;
    });
    builder.addCase(loginWithEmail.pending, (state) => {
      state.loading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(loginWithEmail.rejected, (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    });
    builder.addCase(registerWithEmailAndPassword.fulfilled, (state) => {
      state.isLoggedIn = true;
      state.loading = false;
    });
    builder.addCase(registerWithEmailAndPassword.pending, (state) => {
      state.loading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(registerWithEmailAndPassword.rejected, (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    });
  },
});
export const { reducer: userAuthReducer, actions: userActions } = userSlice;
