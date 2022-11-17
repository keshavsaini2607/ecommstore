import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import mainSlice from "./mainSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
   reducer: {
      categorySlice,
      mainSlice,
      cartSlice
   },
});
