import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Stacks
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';

import CartIcon from '../Components/CartIcon';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="home"
              size={30}
              style={{position: 'relative'}}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <View>
              <Ionicons
                name="cart"
                size={30}
                style={{position: 'relative'}}
                color={color}
              />
              <CartIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="settings"
              size={30}
              style={{position: 'relative'}}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="person"
              size={30}
              style={{position: 'relative'}}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
