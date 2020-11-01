import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../../components/MealList/MealList';
import { IStateMeals } from '../../store/types/meals';
import { CategoriesProps } from '../../types/stackNavigator/categories-screen-types';

// import { Container } from './styles';

export const FavoritesScreen = ({ navigation }: CategoriesProps) => {
  const favMeals = useSelector(
    (state: IStateMeals) => state.meals.favoriteMeals,
  );

  return <MealList listData={favMeals} navigation={navigation} />;
};
