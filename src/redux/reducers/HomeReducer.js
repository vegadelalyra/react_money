import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  balance: 0,
  transactions: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    // Agrega aquí más reducers para otras acciones relacionadas con la página Home
  },
});

export const { setContacts, setBalance, addTransaction } = homeSlice.actions;
export default homeSlice.reducer;
