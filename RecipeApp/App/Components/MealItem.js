import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DefaultText from './DefaultText';

const MealItem = (props) => {
  const item = props.item;
  return (
    <View style={styles.card}>
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
          <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
              <ImageBackground
                source={{uri: item.imageUrl}}
                style={styles.bgImage}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetails}}>
              <DefaultText> {item.duration}m</DefaultText>
              <DefaultText> {item.complexity.toUpperCase()}</DefaultText>
              <DefaultText> {item.affordability.toUpperCase()}</DefaultText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 10,
  },
  mealItem: {
    borderRadius: 15,
    overflow: 'hidden',
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    marginBottom: 20,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
