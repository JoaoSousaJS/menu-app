import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../../types/stackNavigator/RouteParamList';
import { MealItem } from '../MealItem/MealItem';
import { Meal } from '../../models/meal/meal';

// import { Container } from './styles';

interface PropsMealList {
  listData: Meal[];
  navigation: StackNavigationProp<RootStackParamList, 'categories'>;
}

interface IItemData {
  item: {
    id: string;
    title: string;
    duration: number;
    complexity: string;
    affordability: string;
    imageUrl: string;
  };
}

const MealList = (props: PropsMealList) => {
  const renderMealItem = (itemData: IItemData) => {
    return (
      <MealItem
        duration={itemData.item.duration}
        title={itemData.item.title}
        onSelectMeal={() =>
          props.navigation.navigate('mealDetail', {
            mealId: itemData.item.id,
            title: itemData.item.title,
          })
        }
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={styles.flatlistMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  flatlistMeal: {
    width: '100%',
  },
});

export default MealList;
