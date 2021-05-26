import React from 'react';
import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import ProductItem from '../../../Components/Shop/ProductItem';
import * as cartActions from '../../../Store/Actions/Cart';
import Colors from '../../../Utility/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ProductOverviewScreen = ({navigation}) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    navigation.navigate('ProductDetails', {
      productId: id,
      productTitle: title,
    });
  };

  return (
    <FlatList
      style={{marginHorizontal: 15}}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          itemData={itemData}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}>
          <Button
            color={Colors.primary}
            title="Details"
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 18,
                  marginRight: 3,
                }}>
                Cart
              </Text>
              <EvilIcons name="cart" size={28} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </ProductItem>
      )}
    />
  );
};

export default ProductOverviewScreen;
