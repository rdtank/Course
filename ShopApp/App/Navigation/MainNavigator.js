import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ShopNavigator from './ShopNavigator';
import OrderNavigator from './OrderNavigator';
import Colors from '../Utility/Colors';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AdminNavigator from './AdminNavigator';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Products"
      drawerContentOptions={{activeTintColor: Colors.primary}}>
      <Drawer.Screen
        name="Products"
        component={ShopNavigator}
        options={{
          drawerIcon: (drawerdata) => (
            <Octicons name="dashboard" size={22} color={drawerdata.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrderNavigator}
        options={{
          drawerIcon: (drawerdata) => (
            <Octicons
              name="list-unordered"
              size={22}
              color={drawerdata.color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (drawerdata) => (
            <Feather name="edit" size={22} color={drawerdata.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
