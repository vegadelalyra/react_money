import { configureStore } from '@reduxjs/toolkit';
import userReducer  from './slices/user/userSlice'
import accountReducer from './slices/account/accountSlice'
import appReducer from './slices/app/appSlice'

const store = configureStore({
  reducer: {
    user: userReducer, 
    account: accountReducer,
    app: appReducer
  },
});

export default store;
