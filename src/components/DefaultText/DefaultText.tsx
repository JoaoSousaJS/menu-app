import React from 'react';
import { Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export const DefaultText = (props: any) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});
