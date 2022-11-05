import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartListSlice from './slices/cartListSlice';

const reducers = combineReducers({
  cartList: cartListSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
