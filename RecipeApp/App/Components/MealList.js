import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealItem from './MealItem';

const MealList = (props) => {
  const favoriteMeal = useSelector((state) => state.meals.favoriteMeal);

  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeal.some(
      (meal) => meal.id === itemData.item.id,
    );
    return (
      <MealItem
        item={itemData.item}
        onSelectMeal={() =>
          props.navigation.navigate('Details', {
            mealId: itemData.item.id,
            mealtitle: itemData.item.title,
            isFav: isFavorite,
          })
        }
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    // backgroundColor: 'white',
  },
});
