import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import FilterNavigator from './FilterNavigator';
import Colors from '../Utility/Colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Meals"
      drawerContentOptions={{
        activeTintColor: Colors.accent,
        labelStyle: {
          fontFamily: 'NewTegomin-Regular',
          fontSize: 20,
          letterSpacing: 1,
        },
      }}>
      <Drawer.Screen name="Meals" component={TabNavigator} />
      <Drawer.Screen name="Filters" component={FilterNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
