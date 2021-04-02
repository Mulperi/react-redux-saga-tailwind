import { createSlice } from '@reduxjs/toolkit';
import { toast, ToastOptions } from 'react-toastify';

export interface UiState {
  loading: boolean;
  errorMessage: string | null;
  loggedIn: boolean;
  snackbar: {
    open: boolean;
    message: string;
    severity: 'error' | 'warning' | 'info' | 'success' | 'default' | 'dark';
  };
}

export const initialState: UiState = {
  loading: false,
  errorMessage: null,
  loggedIn: false,
  snackbar: {
    open: false,
    message: '',
    severity: 'success',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    uiSnackbarOpen(state: UiState, { payload }: any) {
      // state.snackbar = {
      //   open: true,
      //   message: payload.message,
      //   severity: payload.severity,
      // };
      const snackbarOptions: ToastOptions = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      };

      switch (payload.severity) {
        case 'error':
          toast.error(payload.message, snackbarOptions);
          break;
        case 'warning':
          toast.warning(payload.message, snackbarOptions);
          break;
        case 'info':
          toast.info(payload.message, snackbarOptions);
          break;
        case 'success':
          toast.success(payload.message, snackbarOptions);
          break;
        case 'default':
          toast.success(payload.message, snackbarOptions);
          break;
        case 'dark':
          toast.success(payload.message, snackbarOptions);
          break;

        default:
          break;
      }
    },
    uiSnackbarClose(state: UiState) {
      state.snackbar.open = false;
    },
  },
});

export const { uiSnackbarOpen, uiSnackbarClose } = uiSlice.actions;

export default uiSlice.reducer;
