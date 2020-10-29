import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { CategoriesScreen } from '../screens/categories/CategoriesScreen';
import { CategoriesMealsScreen } from '../screens/categoryMeal/CategoryMealsScreen';
import { MealDetailScreen } from '../screens/mealDetail/MealDetailScreen';

import { CustomHeaderButton } from '../components/HeaderButton/Header';

import { RootStackParamList } from '../types/stackNavigator/RouteParamList';

import { optionsMealsScreen } from './ScreenOptions/MealsScreen';
import { FavoritesScreen } from '../screens/favorites/FavoritesScreen';
import { RootTabParamList } from '../types/tabNavigator/RouteParamList';
import Color from '../constants/Color';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

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

export const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: Color.accentColor }}>
      <Tab.Screen
        name="Meals"
        component={MealsNavigatorStack}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
