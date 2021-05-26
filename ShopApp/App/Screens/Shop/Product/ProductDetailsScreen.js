import React from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './Styles';
import Colors from '../../../Utility/Colors';
import * as cartActions from '../../../Store/Actions/Cart';
import {useDispatch} from 'react-redux';

const ProductDetailsScreen = ({route, navigation}) => {
  const {productId} = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find(
      (product) => product.id === productId,
    ),
  );

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image source={{uri: selectedProduct.imageUrl}} style={styles.image} />
      <View style={styles.action}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
