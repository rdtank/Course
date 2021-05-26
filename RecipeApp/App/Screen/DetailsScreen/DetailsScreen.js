import React, {useCallback, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './DetailsScreenStyles';
import DefaultText from '../../Components/DefaultText';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../../Store/Actions/Meals';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const DetailsScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;

  const checkFav = useSelector((state) =>
    state.meals.favoriteMeal.some((meal) => meal.id === mealId),
  );

  const availableMeal = useSelector((state) => state.meals.meals);

  const selectedMeal = availableMeal.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({isFav: checkFav});
  }, [checkFav]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.headerImage} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredients) => (
        <ListItem key={ingredients}>{ingredients}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <ListItem key={steps}>{steps}</ListItem>
      ))}
    </ScrollView>
  );
};

export default DetailsScreen;
