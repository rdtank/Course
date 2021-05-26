import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Child #1</Text>
      <Text style={styles.text}>Child #2</Text>
      <Text style={styles.text}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: 'black',
  },
  text: {
    borderWidth: 3,
    borderColor: 'red',
  },
});
