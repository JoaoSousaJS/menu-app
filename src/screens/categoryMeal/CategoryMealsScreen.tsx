import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export const CategoriesMealsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>The categories meals screen</Text>
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
