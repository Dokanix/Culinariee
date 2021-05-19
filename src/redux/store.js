import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import recipeReducer from './recipeSlice';

export default configureStore({
  reducer: {
    category: categoryReducer,
    recipes: recipeReducer,
  },
});
