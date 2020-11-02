export type RootStackParamList = {
  categories: {
    categoryId: string;
    categoryTitle: string;
  };
  categoriesMeals: {
    categoryId: string;
    categoryTitle: string;
  };
  mealDetail: {
    mealId: string;
    title: string;
    duration: number;
    complexity: string;
    affordability: string;
    toggleFav: () => void;
    isFav: boolean;
  };
};
