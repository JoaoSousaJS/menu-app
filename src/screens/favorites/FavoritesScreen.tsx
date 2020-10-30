import React from 'react';
import MealList from '../../components/MealList/MealList';
import { MEALS } from '../../data/dummy-data';
import { CategoriesProps } from '../../types/stackNavigator/categories-screen-types';

// import { Container } from './styles';

export const FavoritesScreen = ({ route, navigation }: CategoriesProps) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favMeals} navigation={navigation} />;
};
