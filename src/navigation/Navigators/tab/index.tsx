import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Color from '../../../constants/Color';
import { RootTabParamList } from '../../../types/tabNavigator/RouteParamList';
import { FavStackNavigator, MealsNavigatorStack } from '../stack';

const Tab = createBottomTabNavigator<RootTabParamList>();
const AndroidTab = createMaterialBottomTabNavigator<RootTabParamList>();

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
