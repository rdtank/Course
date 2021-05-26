import {Body, Content, Left, ListItem, Text, Thumbnail} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

const {width} = Dimensions.get('window');

const SearchedProducts = (props) => {
  const {productsFiltered, navigation} = props;
  return (
    <>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <ListItem
            onPress={() => navigation.navigate('Product Details', {item: item})}
            key={item._id.$oid}
            avatar>
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                }}
              />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={styles.center}>
          <Text style={{alignSelf: 'center', marginTop: 20}}>
            No Products Match!
          </Text>
        </View>
      )}
    </>
  );
};

export default SearchedProducts;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
