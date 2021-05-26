import React from 'react';
import {Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MealNavigation from './MealNavigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../Utility/Colors';
import FavNavigator from './FavNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.accent}
      inactiveColor="#596e79"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={MealNavigation}
        options={{
          tabBarLabel: (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({color}) => (
            <FontAwesome name="cutlery" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavNavigator}
        options={{
          tabBarLabel: (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Favorite!
            </Text>
          ),
          tabBarIcon: ({color}) => (
            <FontAwesome name="star" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
