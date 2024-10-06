import { combineReducers } from '@reduxjs/toolkit';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
    customers: customerReducer,
});

export default rootReducer;
