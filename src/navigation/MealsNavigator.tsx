import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CategoriesScreen } from '../screens/categories/CategoriesScreen';
import { CategoriesMealsScreen } from '../screens/categoryMeal/CategoryMealsScreen';
import { MealDetailScreen } from '../screens/mealDetail/MealDetailScreen';

const Stack = createStackNavigator();

export const MealsNavigatorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="categories" component={CategoriesScreen} />
      <Stack.Screen name="categoriesMeals" component={CategoriesMealsScreen} />
      <Stack.Screen name="mealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};
