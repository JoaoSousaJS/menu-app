import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export const CategoriesMealsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>The categories meals screen</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => navigation.navigate('mealDetail')}
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
