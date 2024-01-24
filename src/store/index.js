import { configureStore } from '@reduxjs/toolkit';
import userReducer  from './slices/user/userSlice'
import homeReducer from './slices/home/homeSlice'

const store = configureStore({
  reducer: {
    user: userReducer, 
    home: homeReducer
  },
});

export default store;
