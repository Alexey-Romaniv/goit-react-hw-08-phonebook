import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue('This user already exist');
    }
  }
);

export const login = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      console.log(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    const tokenFromStorage = getState().auth.token;

    console.log(tokenFromStorage + ' - token');
    if (!tokenFromStorage) {
      return rejectWithValue('error');
    }
    token.set(tokenFromStorage);
    try {
      const { data } = await axios('/users/current');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue('ERRRORR');
    }
  }
);
