import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './App/Components/Header';
import GameOver from './App/Screen/GameOver';
import GameScreen from './App/Screen/GameScreen';
import StartGame from './App/Screen/StartGame';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [numOfGuess, setNumOfGuess] = useState(0);

  const newGameHandler = () => {
    setNumOfGuess(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setNumOfGuess(numOfRounds);
  };

  let content = <StartGame startGame={startGameHandler} />;

  if (userNumber && numOfGuess <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (numOfGuess > 0) {
    content = (
      <GameOver
        guessNumber={numOfGuess}
        userNumber={userNumber}
        onRestart={startGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <Header title="Guess Number" />
      {content}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
