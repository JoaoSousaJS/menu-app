import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export const CategoriesScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>The categories screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => navigation.navigate('categoriesMeals')}
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
