import Color from '../../constants/Color';
import { Platform } from 'react-native';

export const optionsMealsScreen = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor,
};
