import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const GameOver = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of Guess: {props.guessNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
