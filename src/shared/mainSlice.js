import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  allProducts: [],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeLoading: (state, action) => {
        state.loading = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeLoading, setAllProducts } = mainSlice.actions

export default mainSlice.reducer