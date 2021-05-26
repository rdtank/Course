import React from 'react';
import MealList from '../../Components/MealList';
import {useSelector} from 'react-redux';
import DefaultText from '../../Components/DefaultText';
import {StyleSheet, View} from 'react-native';

const CategoryMeals = ({route, navigation}) => {
  const cId = route.params.categoryId;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeal = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(cId) >= 0,
  );

  if (displayMeal.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>No meals found, maybe check your filters!</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayMeal} navigation={navigation} />;
};

export default CategoryMeals;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
