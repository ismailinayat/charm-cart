// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const foundItemIndex = state.items.findIndex((item) => item.id === newItem.id)

      if (foundItemIndex !== -1) {

        state.items[foundItemIndex].quantity += 1;
       
      } else {

          state.items.push({...newItem, quantity: 1});
      }
    },
    decrement: (state, action) => {
      const itemId = action.payload;
      const foundItemIndex = state.items.findIndex((item) => item.id === itemId)

      if (foundItemIndex !== -1 && state.items[foundItemIndex].quantity > 1) {

        state.items[foundItemIndex].quantity -= 1;
       
      } else if (foundItemIndex !== -1 && state.items[foundItemIndex].quantity <= 1) {

        state.items = state.items.filter((item) => item.id !== itemId);

      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart, decrement } = cartSlice.actions;

export default cartSlice.reducer;
