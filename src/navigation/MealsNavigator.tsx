import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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
import { FavStackParamList } from '../types/favStackNavigator/RouteParamList';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();
const AndroidTab = createMaterialBottomTabNavigator<RootTabParamList>();
const FavStack = createStackNavigator<FavStackParamList>();

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

const FavStackNavigator = () => {
  return (
    <FavStack.Navigator screenOptions={optionsMealsScreen}>
      <FavStack.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{ headerTitle: 'Your Favorites' }}
      />
      <FavStack.Screen name="MealDetail" component={MealDetailScreen} />
    </FavStack.Navigator>
  );
};

export const AndroidMealsFavTabNavigator = () => {
  return (
    <AndroidTab.Navigator shifting={true} activeColor={'white'}>
      <AndroidTab.Screen
        name="Meals"
        component={MealsNavigatorStack}
        options={{
          tabBarColor: Color.primaryColor,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <AndroidTab.Screen
        name="Favorite"
        component={FavStackNavigator}
        options={{
          tabBarColor: Color.accentColor,
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </AndroidTab.Navigator>
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
        component={FavStackNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
