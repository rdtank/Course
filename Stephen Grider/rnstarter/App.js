import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ImageScreen from './App/Screens/ImageScreen';
import HomeScreen from './App/Screens/HomeScreen';
import CounterScreen from './App/Screens/CounterScreen';
import ColorScreen from './App/Screens/ColorScreen';
import RGBColorScreen from './App/Screens/RGBColorScreen';
import TextScreen from './App/Screens/TextScreen';
import BoxScreen from './App/Screens/BoxScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ImageDemo"
          component={ImageScreen}
          options={{headerTitle: 'Image Demo'}}
        />
        <Stack.Screen
          name="CounterDemo"
          component={CounterScreen}
          options={{headerTitle: 'Counter Demo'}}
        />
        <Stack.Screen
          name="ColorDemo"
          component={ColorScreen}
          options={{headerTitle: 'Color Demo'}}
        />
        <Stack.Screen
          name="RGBColorDemo"
          component={RGBColorScreen}
          options={{headerTitle: 'RGB Color Demo'}}
        />
        <Stack.Screen
          name="TextDemo"
          component={TextScreen}
          options={{headerTitle: 'Text Input Demo'}}
        />
        <Stack.Screen
          name="BoxDemo"
          component={BoxScreen}
          options={{headerTitle: 'Box Model Demo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
