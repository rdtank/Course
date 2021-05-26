import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import productReducer from './App/Store/Reducers/Product';

import cartReducer from './App/Store/Reducers/Cart';
import ordersReducer from './App/Store/Reducers/Orders';
import MainNavigator from './App/Navigation/MainNavigator';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
