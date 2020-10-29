import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {
  AndroidMealsFavTabNavigator,
  MealsFavTabNavigator,
} from './src/navigation/MealsNavigator';
import { Platform } from 'react-native';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      {Platform.OS === 'android' ? (
        <AndroidMealsFavTabNavigator />
      ) : (
        <MealsFavTabNavigator />
      )}
    </NavigationContainer>
  );
}
