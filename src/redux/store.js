import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './reducers/customerReducer';

const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
});

export default store;
