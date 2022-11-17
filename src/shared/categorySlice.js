import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCategory: "all",
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
        state.selectedCategory = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeCategory } = categorySlice.actions

export default categorySlice.reducer