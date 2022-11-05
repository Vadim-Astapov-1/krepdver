import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartListSlice from './slices/cartListSlice';

const rootReducer = combineReducers({
  cartList: cartListSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
