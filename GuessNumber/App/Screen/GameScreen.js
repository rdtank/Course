import React, {useEffect, useRef, useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import Card from '../Components/Card';
import NumberContainer from '../Components/NumberContainer';

const randomGenrator = (minNumber, maxNumber, exclude) => {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);

  const rndNumber = Math.floor(Math.random() * (max - min) + min);
  if (rndNumber === exclude) {
    return randomGenrator(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    randomGenrator(1, 100, props.userChoice),
  );

  const [guessRound, setGuessRound] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {userChoice, onGameOver} = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessRound);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = randomGenrator(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setGuessRound((curRound) => curRound + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button
          title="Higher"
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});
