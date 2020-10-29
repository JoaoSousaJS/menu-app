import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MealItem } from '../../components/MealItem/MealItem';
import { MEALS } from '../../data/dummy-data';
import { CategoriesProps } from '../../types/stackNavigator/categories-screen-types';

// import { Container } from './styles';

interface IItemData {
  item: {
    id: string;
    title: string;
    duration: number;
    complexity: string;
    affordability: string;
    imageUrl: string;
  };
}

export const CategoriesMealsScreen = ({
  route,
  navigation,
}: CategoriesProps) => {
  const { categoryId } = route.params;
  // const selectedCategories = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  const renderMealItem = (itemData: IItemData) => {
    return (
      <MealItem
        duration={itemData.item.duration}
        title={itemData.item.title}
        onSelectMeal={() =>
          navigation.navigate('mealDetail', {
            mealId: itemData.item.id,
            title: itemData.item.title,
          })
        }
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={styles.flatlistMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  flatlistMeal: {
    width: '100%',
  },
});
