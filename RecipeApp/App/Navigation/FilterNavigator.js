import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FiltersScreen from '../Screen/FiltersScreen/FiltersScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../Utility/Colors';

const Stack = createStackNavigator();

const FilterNavigator = ({route, navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.primary,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={({route}) => {
          return {
            headerTitle: 'Your Filters',
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.3}
                style={{marginLeft: 15}}
                onPress={() => navigation.openDrawer()}>
                <FontAwesome name="bars" color={Colors.primary} size={22} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                activeOpacity={0.3}
                style={{marginRight: 15}}
                onPress={route.params?.save ?? 'Defualt'}>
                <FontAwesome name="save" color={Colors.primary} size={20} />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default FilterNavigator;
