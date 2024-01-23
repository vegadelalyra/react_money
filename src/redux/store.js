import { configureStore } from '@reduxjs/toolkit';
import theHomeReducer from './reducers/HomeReducer';

const store = configureStore({
  reducer: {
    home: theHomeReducer,
  },
});

export default store;
