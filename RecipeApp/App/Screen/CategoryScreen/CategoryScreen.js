import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../../Data/dummy';
import CategoryGridTile from '../../Components/CategoryGridTile';

const CategoryScreen = ({navigation}) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          navigation.navigate('CategoryMeals', {categoryId: itemData.item.id})
        }
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
