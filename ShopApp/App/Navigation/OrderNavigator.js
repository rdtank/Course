import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../Utility/Colors';
import Feather from 'react-native-vector-icons/Feather';
import OrderScreen from '../Screens/Shop/Orders/OrderScreen';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

const OrderNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.headerBtn,
        headerTitleStyle: {fontFamily: 'OpenSans-Bold', color: Colors.primary},
        headerBackTitleVisible: false,
        headerBackTitleStyle: {marginLeft: 10},
      }}>
      <Stack.Screen
        name="OrdersScreen"
        component={OrderScreen}
        options={{
          headerTitle: 'Your Orders',
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.openDrawer()}>
              <Feather name="menu" color={Colors.headerBtn} size={20} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
