import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList } from 'react-native';
import { CategoriesProps } from '../../types/stackNavigator/categories-screen-types';
import { CategoryGridTile } from '../../components/CategoryGrid/CategoryGridTile';

// import { Container } from './styles';

interface IItemdata {
  item: {
    _id: string;
    title: string;
    color: string;
  };
}

export const CategoriesScreen = ({ navigation }: CategoriesProps) => {
  const [categories, setCategories] = useState({
    _id: '',
    title: '',
    color: '',
  });
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/categories').then((response) => {
      setCategories(response.data.data.doc);
    });
  }, []);
  const renderGridItem = (itemData: IItemdata) => {
    console.log(itemData.item.color);
    return (
      <CategoryGridTile
        title={itemData.item.title}
        id={itemData.item._id}
        color={itemData.item.color}
        onSelect={() =>
          navigation.navigate('categoriesMeals', {
            categoryId: itemData.item._id,
            categoryTitle: itemData.item.title,
          })
        }
      />
    );
  };
  return (
    <FlatList data={categories} renderItem={renderGridItem} numColumns={2} />
  );
};
