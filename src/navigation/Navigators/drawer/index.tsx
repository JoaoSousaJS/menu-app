import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { AndroidMealsFavTabNavigator, MealsFavTabNavigator } from '../tab';
import { FilterNavigatorStack } from '../stack';

const MainNavigator = createDrawerNavigator();

export const MainNavigatorDrawer = () => {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen
        name="home"
        component={
          Platform.OS === 'android'
            ? AndroidMealsFavTabNavigator
            : MealsFavTabNavigator
        }
      />

      <MainNavigator.Screen name="filter" component={FilterNavigatorStack} />
    </MainNavigator.Navigator>
  );
};
