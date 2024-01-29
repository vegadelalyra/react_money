import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
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
      state.balance = Math.max(0, action.payload);
    },
    SET_TRANSACTIONS: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const { SET_CONTACTS, SET_BALANCE, SET_TRANSACTIONS } =
  accountSlice.actions;

export default accountSlice.reducer;
