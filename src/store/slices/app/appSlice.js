// appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isFetchingData: false,
    contactToTransfer: false,
  },
  reducers: {
    SET_IS_FETCHING_DATA: (state, action) => {
      state.isFetchingData = action.payload;
    },
    SET_CONTACT_TO_TRANSFER: (state, action) => {
      state.contactToTransfer = action.payload
    }
  },
});

export const { SET_IS_FETCHING_DATA, SET_CONTACT_TO_TRANSFER } = appSlice.actions;

export default appSlice.reducer;
