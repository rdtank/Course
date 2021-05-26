import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProductItem = (props) => {
  const {item} = props.itemData;

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item.imageUrl}} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.action}>{props.children}</View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  touchable: {
    overflow: 'hidden',
    borderRadius: 10,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Lemonada-Bold',
    fontSize: 14,
    marginVertical: 1,
  },
  price: {
    fontFamily: 'Lemonada-Regular',
    fontSize: 14,
    color: '#888',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
  details: {
    alignItems: 'center',
    padding: 10,
    height: '15%',
  },
});
