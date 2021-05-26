import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ResultDeatil = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars,{result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDeatil;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
