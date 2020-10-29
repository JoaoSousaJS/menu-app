import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';
import Color from '../../constants/Color';

// import { Container } from './styles';

export const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      onPress={() => {}}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Color.primaryColor}
    />
  );
};
