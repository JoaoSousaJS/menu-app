import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { MainNavigatorDrawer } from './src/navigation/Navigators/drawer';

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
      <MainNavigatorDrawer />
    </NavigationContainer>
  );
}
