import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      console.log('ERORRRR');
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, { rejectWithValue }) => {
    const { id, name, number } = contact;
    try {
      await axios.patch(`/contacts/${id}`, { name, number });
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
