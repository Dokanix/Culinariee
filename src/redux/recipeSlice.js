import { createSlice } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    all: [],
    active: null,
  },
  reducers: {
    initializeRecipes: (state, action) => {
      state.all = action.payload;
      return state;
    },
    toggleFavorite: (state, action) => {
      const favorite = state.all.find((recipe) => recipe.id === action.payload);
      favorite.favorite = !favorite.favorite;
    },
  },
});

export const { initializeRecipes, toggleFavorite } = recipeSlice.actions;
export default recipeSlice.reducer;
