import { createSlice } from '@reduxjs/toolkit';

const cartListSlice = createSlice({
  name: 'cartList',
  initialState: {
    value: [],
  },
  reducers: {
    addItemCart: (state, action) => {
      const card = action.payload;

      if (!state.value.some((item) => item.id === card.id)) {
        state.value = [...state.value, card];
        return;
      }

      state.value = state.value.map((item) => {
        if (item.id === card.id) {
          return { ...item, count: item.count + card.count };
        }

        return item;
      });
    },
    changeCountItemCart: (state, action) => {
      const card = {
        id: action.payload.id,
        count: action.payload.count,
      };

      state.value = state.value.map((item) => {
        if (item.id === card.id) {
          return { ...item, count: card.count };
        }

        return item;
      });
    },
    deleteItemCart: (state, action) => {
      const cardId = action.payload;

      state.value = state.value.filter((item) => item.id !== cardId);
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const cartListSelector = {
  getCartList: (state) => state.cartList.value,
};

export const { addItemCart, changeCountItemCart, deleteItemCart, clearCart } =
  cartListSlice.actions;
export default cartListSlice.reducer;
