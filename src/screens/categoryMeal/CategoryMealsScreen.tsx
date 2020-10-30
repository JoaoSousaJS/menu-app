import React from 'react';
import MealList from '../../components/MealList/MealList';
import { MEALS } from '../../data/dummy-data';
import { CategoriesProps } from '../../types/stackNavigator/categories-screen-types';

// import { Container } from './styles';

export const CategoriesMealsScreen = ({
  route,
  navigation,
}: CategoriesProps) => {
  const { categoryId } = route.params;
  // const selectedCategories = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};
