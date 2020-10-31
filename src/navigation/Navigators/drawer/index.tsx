import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { AndroidMealsFavTabNavigator, MealsFavTabNavigator } from '../tab';
import { FilterNavigatorStack } from '../stack';
import Color from '../../../constants/Color';

const MainNavigator = createDrawerNavigator();

export const MainNavigatorDrawer = () => {
  return (
    <MainNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: Color.accentColor,
        labelStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <MainNavigator.Screen
        name="home"
        component={
          Platform.OS === 'android'
            ? AndroidMealsFavTabNavigator
            : MealsFavTabNavigator
        }
        options={{ title: 'Meals' }}
      />

      <MainNavigator.Screen
        name="filter"
        component={FilterNavigatorStack}
        options={{ title: 'Filters' }}
      />
    </MainNavigator.Navigator>
  );
};
