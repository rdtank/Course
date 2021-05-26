import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        value={term}
        onChangeText={onTermChange}
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
