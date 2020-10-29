import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { MealDetailsProps } from '../../types/stackNavigator/meal-details-screen-types';
// import { Container } from './styles';

export const MealDetailScreen = ({ route, navigation }: MealDetailsProps) => {
  const { mealId } = route.params;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Text>{selectedMeals?.title}</Text>
      <Button
        title="Go back to categories"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
