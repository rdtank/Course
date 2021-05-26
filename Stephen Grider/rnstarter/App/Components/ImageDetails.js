import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ImageDetails = (props) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={{height: 150, width: 250}}
        source={{
          uri: props.imageSource,
        }}
      />
      <Text>{props.title}</Text>
      <Text>Image score - {props.score}</Text>
    </View>
  );
};

export default ImageDetails;

const styles = StyleSheet.create({});
