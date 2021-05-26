import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>Simple App</Text>
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('ImageDemo')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('CounterDemo')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('ColorDemo')}
      />
      <Button
        title="Go to RGB Color Demo"
        onPress={() => navigation.navigate('RGBColorDemo')}
      />
      <Button
        title="Go to Text Input Demo"
        onPress={() => navigation.navigate('TextDemo')}
      />
      <Button
        title="Go to Box Model Demo"
        onPress={() => navigation.navigate('BoxDemo')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});
