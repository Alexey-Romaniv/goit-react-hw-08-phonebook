import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  login,
  logout,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [registration.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registration.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [registration.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [logout.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled]: state => {
      state.token = null;
      state.user = {
        name: '',
        email: '',
      };
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetching = false;
      state.isLoading = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
