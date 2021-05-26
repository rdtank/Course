import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './App/Screens/SearchScreen';
import DetailsScreen from './App/Screens/DetailsScreen';
import IndexScreen from './App/Screens/Blog/IndexScreen';
import {Provider} from './App/Context/BlogContext';
import ShowScreen from './App/Screens/Blog/ShowScreen';
import CreateScreen from './App/Screens/Blog/CreateScreen';

import Feather from 'react-native-vector-icons';
import EditScreen from './App/Screens/Blog/EditScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{
              title: 'Blogs',
            }}
          />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />

          <Stack.Screen
            name="BusinessSearch"
            component={SearchScreen}
            options={{title: 'Business Search'}}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{title: 'Deatils'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
