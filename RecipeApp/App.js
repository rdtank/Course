import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MealNavigation from './App/Navigation/MealNavigation';
import TabNavigator from './App/Navigation/TabNavigator';
import DrawerNavigator from './App/Navigation/DrawerNavigator';
import {createStore, combineReducers} from 'redux';
import mealReducers from './App/Store/Reducers/Meals';
import {Provider} from 'react-redux';

const rootReducers = combineReducers({
  meals: mealReducers,
});

const store = createStore(rootReducers);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
