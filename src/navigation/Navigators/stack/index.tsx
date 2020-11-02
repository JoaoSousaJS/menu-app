import React from 'react';

import { TouchableOpacity } from 'react-native';
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
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { FilterStackParamList } from '../../../types/filterStackNavigator/RouteParamList';

const Stack = createStackNavigator<RootStackParamList>();
const FavStack = createStackNavigator<FavStackParamList>();
const FilterStack = createStackNavigator<FilterStackParamList>();

export const FilterNavigatorStack = () => {
  const navigation = useNavigation();

  return (
    <FilterStack.Navigator>
      <FilterStack.Screen
        name="filter"
        component={FilterScreen}
        options={({ route }) => ({
          ...optionsMealsScreen,
          title: 'Filter Meals',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="ios-menu" />
              </HeaderButtons>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => route.params.save()}>
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Save" iconName="ios-save" />
              </HeaderButtons>
            </TouchableOpacity>
          ),
        })}
      />
    </FilterStack.Navigator>
  );
};

export const MealsNavigatorStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        ...optionsMealsScreen,
      }}
    >
      <Stack.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="ios-menu" />
              </HeaderButtons>
            </TouchableOpacity>
          ),
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
            <TouchableOpacity onPress={() => route.params.toggleFav()}>
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Favorite"
                  iconName={
                    route.params.isFav ? 'ios-star' : 'ios-star-outline'
                  }
                />
              </HeaderButtons>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const FavStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <FavStack.Navigator screenOptions={optionsMealsScreen}>
      <FavStack.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          headerTitle: 'Your Favorites',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="ios-menu" />
              </HeaderButtons>
            </TouchableOpacity>
          ),
        }}
      />
      <FavStack.Screen name="mealDetail" component={MealDetailScreen} />
    </FavStack.Navigator>
  );
};
