import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    contacts: [
      {
        id: '1231daas4124',
        name: 'Ryan Green',
        email: 'ryangreen@gmail.com',
        photoURL:
          'https://res.cloudinary.com/vegadelalyra/image/upload/v1706487993/makaia-transfers-react/transaction/test.png',
        favorite: true,
        sameCountry: false,
      },
      {
        id: '1231daa324s4124',
        name: 'Ayan Green',
        email: 'ryangreen@gmail.com',
        photoURL:
          'https://res.cloudinary.com/vegadelalyra/image/upload/v1706487993/makaia-transfers-react/transaction/test.png',
        favorite: false,
        sameCountry: true,
      },
      {
        id: '1231daas4e124',
        name: 'Byan Green',
        email: 'ryangreen@gmail.com',
        photoURL:
          'https://res.cloudinary.com/vegadelalyra/image/upload/v1706487993/makaia-transfers-react/transaction/test.png',
        favorite: true,
        sameCountry: true,
      },
    ],
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
