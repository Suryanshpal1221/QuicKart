import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    emptyCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { addCartItem, emptyCart } = cartItemSlice.actions;

export default cartItemSlice.reducer;
