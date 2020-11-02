import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { DefaultText } from '../../components/DefaultText/DefaultText';
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

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
