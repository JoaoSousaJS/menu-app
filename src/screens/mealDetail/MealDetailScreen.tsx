import React, { useCallback, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultText } from '../../components/DefaultText/DefaultText';
import { Meal } from '../../models/meal/meal';
import { toggleFavorite } from '../../store/actions/meals';
import { IStateMeals } from '../../store/types/meals';
import { MealDetailsProps } from '../../types/stackNavigator/meal-details-screen-types';
// import { Container } from './styles';

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

export const MealDetailScreen = ({ route, navigation }: MealDetailsProps) => {
  const { mealId } = route.params;
  const currentMealIsFavorite = useSelector((state: IStateMeals) =>
    state.meals.favoriteMeals.some((meal: Meal) => meal.id === mealId),
  );
  const availableMeals = useSelector((state: IStateMeals) => state.meals.meals);

  const selectedMeals = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler, navigation]);

  useEffect(() => {
    navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite, navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeals?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeals?.duration}m</DefaultText>
        <DefaultText>{selectedMeals?.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeals?.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeals?.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeals?.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
