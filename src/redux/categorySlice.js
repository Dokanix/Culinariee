import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    active: 'Wszystkie',
    customCategories: [
      {
        icon: '',
        name: 'Fast Food',
      },
      {
        icon: '',
        name: 'Pizza',
      },
    ],
  },
  reducers: {
    setCategory: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
