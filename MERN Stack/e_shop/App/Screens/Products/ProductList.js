import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import ProductCard from './ProductCard';

var {width} = Dimensions.get('window');

const ProductList = (props) => {
  const {item, navigation} = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Product Details', {item: item})}
      style={{width: '50%'}}>
      <View style={{width: width / 2}}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
