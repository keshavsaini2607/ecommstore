import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartItems: [],
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         let existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );
         if (existingIndex !== -1) {
            state.cartItems[existingIndex].quantity += 1;
            return;
         }
         state.cartItems = [...state.cartItems, action.payload];
      },
      increaseQuantity: (state, action) => {
         let existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );
         state.cartItems[existingIndex].quantity += 1;
      },
      decreaseQuantity: (state, action) => {
         let existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );
         state.cartItems[existingIndex].quantity -= 1;
         if(state.cartItems[existingIndex].quantity === 0) {
            state.cartItems.splice(existingIndex, 1);
         }
      },
      removeFromCart: (state, action) => {
         let existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );
         state.cartItems.splice(existingIndex, 1);
      },
      clearCart: (state, action) => {
         state.cartItems = [];
      }
   },
});

// Action creators are generated for each case reducer function
export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
