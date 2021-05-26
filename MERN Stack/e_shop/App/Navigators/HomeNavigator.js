import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductContainer from '../Screens/Products/ProductContainer';
import SingleProduct from '../Screens/Products/SingleProduct';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen name="Home" component={ProductContainer} />
      <Stack.Screen name="Product Details" component={SingleProduct} />
    </Stack.Navigator>
  );
};

export default function HomeNavigator() {
  return <MyStack />;
}
