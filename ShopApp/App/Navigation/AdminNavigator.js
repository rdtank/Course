import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../Utility/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import UserProductScreen from '../Screens/User/Product/UserProductScreen';
import EditProductScreen from '../Screens/User/Product/EditProductScreen';

const Stack = createStackNavigator();

const AdminNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.headerBtn,
        headerTitleStyle: {fontFamily: 'OpenSans-Bold', color: Colors.primary},
        headerBackTitleVisible: false,
        headerBackTitleStyle: {marginLeft: 10},
      }}>
      <Stack.Screen
        name="UserProduct"
        component={UserProductScreen}
        options={{
          headerTitle: 'Your Products',
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.openDrawer()}>
              <Feather name="menu" color={Colors.headerBtn} size={20} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('EditProduct', {productId: 'add'})
              }>
              <Ionicons
                name="create-outline"
                size={22}
                color={Colors.headerBtn}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={({route}) => {
          const submitFn = route.params.submit;
          return {
            headerTitle:
              route.params.productId === 'add' ? 'Add Product' : 'Edit Product',
            headerRight: () => (
              <TouchableOpacity onPress={submitFn}>
                <Feather
                  name="check-circle"
                  size={22}
                  color={Colors.headerBtn}
                  style={{marginRight: 20}}
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
