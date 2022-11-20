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
    [registration.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [registration.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logout.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled]: state => {
      state.isLoading = false;
      state.user = {
        name: '',
        email: '',
      };
      state.token = null;
      state.isLoggedIn = false;
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
      state.isLoading = false;
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.isFetching = false;
    },
  },
});

export const authReducer = authSlice.reducer;
