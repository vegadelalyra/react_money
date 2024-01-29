// appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isFetchingData: false,
    contactToTransfer: false,
    isAddingContact: false,
    transactionAmountSelected: false,
  },
  reducers: {
    SET_IS_FETCHING_DATA: (state, action) => {
      state.isFetchingData = action.payload;
    },
    SET_CONTACT_TO_TRANSFER: (state, action) => {
      state.contactToTransfer = action.payload;
    },
    SET_IS_ADDING_CONTACT: (state, action) => {
      state.isAddingContact = action.payload;
    },
    SET_TRANSACTION_AMOUNT_SELECTED: (state, action) => {
      state.transactionAmountSelected = action.payload;
    },
  },
});

export const {
  SET_IS_FETCHING_DATA,
  SET_CONTACT_TO_TRANSFER,
  SET_IS_ADDING_CONTACT,
  SET_TRANSACTION_AMOUNT_SELECTED,
} = appSlice.actions;

export default appSlice.reducer;
