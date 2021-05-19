import Categories from './Categories';

const commonCategories = [
  {
    icon: 'fastfood',
    name: 'Wszystkie',
  },
  {
    icon: 'favorite',
    name: 'Ulubione',
  },
  {
    icon: 'history',
    name: 'Ostatnie',
  },
  {
    icon: 'star',
    name: 'Najlepsze',
  },
];

const CommonCategories = () => {
  return <Categories categories={commonCategories} />;
};

export default CommonCategories;
