import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { DefaultText } from '../../components/DefaultText/DefaultText';
import MealList from '../../components/MealList/MealList';
import { IStateMeals } from '../../store/types/meals';
import { CategoriesProps } from '../../types/stackNavigator/categories-screen-types';

// import { Container } from './styles';

export const FavoritesScreen = ({ navigation }: CategoriesProps) => {
  const favMeals = useSelector(
    (state: IStateMeals) => state.meals.favoriteMeals,
  );

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No Favorite meals Found. Start adding some!</DefaultText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
