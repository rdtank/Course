import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        value={name}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(val) => setName(val)}
      />
      {name.length < 5 ? (
        <Text>Password must be longer than 5 characters.</Text>
      ) : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
