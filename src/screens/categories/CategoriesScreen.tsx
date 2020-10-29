import React from 'react';
import { FlatList } from 'react-native';
import { CategoriesProps } from '../../types/stackNavigator/categories-screen-types';
import { CATEGORIES } from '../../data/dummy-data';
import { CategoryGridTile } from '../../components/CategoryGrid/CategoryGridTile';

// import { Container } from './styles';

interface IItemdata {
  item: {
    title: string;
    id: string;
    color: string;
  };
}

export const CategoriesScreen = ({ navigation }: CategoriesProps) => {
  const renderGridItem = (itemData: IItemdata) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        id={itemData.item.id}
        color={itemData.item.color}
        onSelect={() =>
          navigation.navigate('categoriesMeals', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          })
        }
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};
