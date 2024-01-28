// appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isFetchingData: false
  },
  reducers: {
    SET_IS_FETCHING_DATA: (state, action) => {
      state.isFetchingData = action.payload;
    },
  },
});

export const { SET_IS_FETCHING_DATA } = appSlice.actions;

export default appSlice.reducer;
