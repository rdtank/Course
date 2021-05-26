import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginHorizontal: 20,
                marginVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{width: 100, height: 100, backgroundColor: item}} />
              <View>
                <Text>{item}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

export default ColorScreen;

const styles = StyleSheet.create({});
