import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Cart from '../Screens/Cart/Cart';
import Checkout from '../Screens/Cart/Checkout/Checkout';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default function HomeNavigator() {
  return <MyStack />;
}
