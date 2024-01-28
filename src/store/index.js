import { configureStore } from '@reduxjs/toolkit';
import userReducer  from './slices/user/userSlice'
import accountReducer from './slices/account/accountSlice'

const store = configureStore({
  reducer: {
    user: userReducer, 
    account: accountReducer
  },
});

export default store;
