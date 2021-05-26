import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Utility/Colors';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: 'white',
  },
});
