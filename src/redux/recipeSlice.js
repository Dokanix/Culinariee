import { createSlice } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: [],
  reducers: {
    initializeRecipes: (state, action) => {
      state = action.payload;
      return state;
    },
    toggleFavorite: (state, action) => {
      const favorite = state.find((recipe) => recipe.id === action.payload);
      favorite.favorite = !favorite.favorite;
    },
  },
});

export const { initializeRecipes, toggleFavorite } = recipeSlice.actions;
export default recipeSlice.reducer;
