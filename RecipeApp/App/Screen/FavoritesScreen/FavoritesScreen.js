import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../../Components/MealList';
import Colors from '../../Utility/Colors';

const FavoritesScreen = (props) => {
  const favMeal = useSelector((state) => state.meals.favoriteMeal);

  if (favMeal.length === 0 || !favMeal) {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }
  return <MealList listData={favMeal} navigation={props.navigation} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'TrainOne-Regular',
    textAlign: 'center',
    fontSize: 22,
    marginHorizontal: 20,
    color: '#f05454',
  },
});
