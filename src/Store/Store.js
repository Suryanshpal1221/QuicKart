import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../Slices/categorySlice";
import itemDetailsReducer from "../Slices/itemDetailsSlice";
import cartItemReducer from "../Slices/cartItemSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    itemDetails: itemDetailsReducer,
    cartItem: cartItemReducer,
  },
});
