import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from '../Screen/FavoritesScreen/FavoritesScreen';
import Colors from '../Utility/Colors';
import DetailsScreen from '../Screen/DetailsScreen/DetailsScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const FavNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.primary,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          headerTitle: 'Your Favorites',
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.3}
              style={{marginLeft: 15}}
              onPress={() => navigation.openDrawer()}>
              <FontAwesome name="bars" color={Colors.primary} size={22} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => {
          const toggleFavorite = route.params?.toggleFav ?? 'default';
          const selectedMeal = route.params.mealtitle;
          const isFav = route.params?.isFav ?? 'Defualt';
          // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
          return {
            headerTitle: selectedMeal,
            headerRight: () => (
              <TouchableOpacity
                activeOpacity={0.3}
                style={{marginRight: 15}}
                onPress={toggleFavorite}>
                <FontAwesome
                  name={isFav ? 'star' : 'star-o'}
                  color={Colors.primary}
                  size={22}
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default FavNavigator;
