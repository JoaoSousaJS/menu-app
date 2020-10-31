import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { DefaultText } from '../../components/DefaultText/DefaultText';
import { MEALS } from '../../data/dummy-data';
import { MealDetailsProps } from '../../types/stackNavigator/meal-details-screen-types';
// import { Container } from './styles';

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

export const MealDetailScreen = ({ route }: MealDetailsProps) => {
  const { mealId } = route.params;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

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
