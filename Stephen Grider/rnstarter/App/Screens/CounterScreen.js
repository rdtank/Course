import React, {useReducer, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {...state, counter: action.payload + 1};
    case 'decrease':
      return {...state, counter: action.payload - 1};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const {counter} = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({type: 'increase', payload: counter})}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({type: 'decrease', payload: counter})}
      />
      <Text>Current Count : {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
