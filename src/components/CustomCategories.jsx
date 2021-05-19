import Categories from './Categories';
import { useSelector } from 'react-redux';

const CustomCategories = () => {
  const recipes = useSelector((state) => state.recipes);
  let customCategories = [];

  for (const recipe of recipes) {
    for (const category of recipe.categories) {
      if (!customCategories.includes(category)) {
        customCategories.push(category);
      }
    }
  }

  customCategories = customCategories.map((category) => ({
    name: category,
    icon: '',
  }));

  console.log(customCategories);

  return <Categories categories={customCategories} />;
};

export default CustomCategories;
