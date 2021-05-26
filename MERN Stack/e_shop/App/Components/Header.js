import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.logo}>E-Shop</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    paddingVertical: 10,
  },
});
