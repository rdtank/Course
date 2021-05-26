import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from '../Screen/CategoryScreen/CategoryScreen';
import CategoryMeals from '../Screen/CategoryScreen/CategoryMeals';
import DetailsScreen from '../Screen/DetailsScreen/DetailsScreen';
import Colors from '../Utility/Colors';
import {CATEGORIES} from '../Data/dummy';
import {enableScreens} from 'react-native-screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

const MealNavigation = ({navigation}) => {
  enableScreens();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.primary,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerTitle: 'Meal Categories',
          headerTitleStyle: {fontFamily: 'OpenSans-Regular'},
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
        name="CategoryMeals"
        component={CategoryMeals}
        options={({route}) => {
          const cId = route.params.categoryId;
          const selectedCategory = CATEGORIES.find((c) => c.id === cId);
          return {headerTitle: selectedCategory.title};
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => {
          const selectedMeal = route.params.mealtitle;
          const toggleFavorite = route.params?.toggleFav ?? 'default';
          const isFav = route.params?.isFav ?? 'Defualt';
          // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
          return {
            headerTitle: selectedMeal,
            headerRight: () => (
              <TouchableOpacity
                activeOpacity={0.3}
                style={{marginRight: 10}}
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

export default MealNavigation;
