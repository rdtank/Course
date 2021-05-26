import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

//Redux
import {Provider} from 'react-redux';
import Store from './App/Redux/Store';

//Navigators
import Main from './App/Navigators/Main';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
