import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductOverviewScreen from '../Screens/Shop/Product/ProductOverviewScreen';
import Colors from '../Utility/Colors';
import ProductDetailsScreen from '../Screens/Shop/Product/ProductDetailsScreen';
import Feather from 'react-native-vector-icons/Feather';
import CartScreen from '../Screens/Shop/Cart/CartScreen';

const Stack = createStackNavigator();

const ShopNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.headerBtn,
        headerTitleStyle: {fontFamily: 'OpenSans-Bold', color: Colors.primary},
        headerBackTitleVisible: false,
        headerBackTitleStyle: {marginLeft: 10},
      }}>
      <Stack.Screen
        name="ProductOverview"
        component={ProductOverviewScreen}
        options={({navigation}) => {
          return {
            headerTitle: 'All Products',
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={20} color={Colors.headerBtn} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CartScreen')}>
                <Feather
                  name="shopping-cart"
                  size={22}
                  color={Colors.headerBtn}
                  style={{marginRight: 20}}
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({route}) => {
          const title = route.params.productTitle;
          console.log(title);
          return {
            headerTitle: title,
          };
        }}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerTitle: 'Your Cart'}}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
