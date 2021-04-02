import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  loading: boolean;
  errorMessage: string | null;
  loggedIn: boolean;
  user: {
    username: string | null;
  };
}

export const initialState: AuthState = {
  loading: false,
  errorMessage: null,
  loggedIn: false,
  user: {
    username: null,
  },
};

const authSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    authGoogleInit(state: AuthState, { payload }: any) {},
    authGoogleSignIn(state: AuthState, { payload }: any) {
      state.loading = true;
    },
    authGoogleSignInSuccess(state: AuthState, { payload }: any) {
      state.loading = false;
    },
    authSetLoggedIn(state: AuthState, { payload }: any) {
      state.loggedIn = payload.loggedIn;
    },
    authSetUsername(state: AuthState, { payload }: any) {
      state.user.username = payload.username;
    },
  },
});

export const {
  authGoogleInit,
  authGoogleSignIn,
  authGoogleSignInSuccess,
  authSetLoggedIn,
  authSetUsername,
} = authSlice.actions;

export default authSlice.reducer;
