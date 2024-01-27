import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    contacts: [],
    balance: 0,
    transactions: [],
  },
  reducers: {
    SET_CONTACTS: (state, action) => {
      state.contacts = action.payload;
    },
    SET_BALANCE: (state, action) => {
      state.balance = action.payload;
    },
    SET_TRANSACTIONS: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const { SET_CONTACTS, SET_BALANCE, SET_TRANSACTIONS } = homeSlice.actions;

export default homeSlice.reducer;
