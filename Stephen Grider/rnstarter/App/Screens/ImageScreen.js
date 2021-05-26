import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageDetails from '../Components/ImageDetails';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg"
        score="9"
      />
      <ImageDetails
        title="Beach"
        imageSource="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581__340.jpg"
        score="7"
      />
      <ImageDetails
        title="Mountain"
        imageSource="https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181__340.jpg"
        score="8"
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
