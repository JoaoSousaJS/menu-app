import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { FavStackParamList } from '../../../types/favStackNavigator/RouteParamList';
import { RootStackParamList } from '../../../types/stackNavigator/RouteParamList';
import { optionsMealsScreen } from '../../ScreenOptions/MealsScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CategoriesScreen } from '../../../screens/categories/CategoriesScreen';
import { CategoriesMealsScreen } from '../../../screens/categoryMeal/CategoryMealsScreen';
import { MealDetailScreen } from '../../../screens/mealDetail/MealDetailScreen';
import { CustomHeaderButton } from '../../../components/HeaderButton/Header';
import { FavoritesScreen } from '../../../screens/favorites/FavoritesScreen';
import { FilterScreen } from '../../../screens/filter/FiltersScreen';

const Stack = createStackNavigator<RootStackParamList>();
const FavStack = createStackNavigator<FavStackParamList>();
const FilterStack = createStackNavigator();

export const FilterNavigatorStack = () => {
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen name="filter" component={FilterScreen} />
    </FilterStack.Navigator>
  );
};

export const MealsNavigatorStack = () => {
  return (
    <Stack.Navigator screenOptions={optionsMealsScreen}>
      <Stack.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: 'Categories',
        }}
      />
      <Stack.Screen
        name="categoriesMeals"
        component={CategoriesMealsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
        })}
      />
      <Stack.Screen
        name="mealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                  console.log('Mark as Favorite');
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const FavStackNavigator = () => {
  return (
    <FavStack.Navigator screenOptions={optionsMealsScreen}>
      <FavStack.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{ headerTitle: 'Your Favorites' }}
      />
      <FavStack.Screen name="mealDetail" component={MealDetailScreen} />
    </FavStack.Navigator>
  );
};
