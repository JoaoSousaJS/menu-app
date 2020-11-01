import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../../components/MealList/MealList';
import { IStateMeals } from '../../store/types/meals';
import { CategoriesProps } from '../../types/stackNavigator/categories-screen-types';

// import { Container } from './styles';

export const CategoriesMealsScreen = ({
  route,
  navigation,
}: CategoriesProps) => {
  const { categoryId } = route.params;
  // const selectedCategories = CATEGORIES.find((cat) => cat.id === categoryId);
  const availableMeals = useSelector(
    (state: IStateMeals) => state.meals.filteredMeals,
  );

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};
