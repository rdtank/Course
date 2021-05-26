import React from 'react';
import {
  Alert,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../../Components/Shop/ProductItem';
import Colors from '../../../Utility/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import * as productActions from '../../../Store/Actions/Product';

const UserProductScreen = ({navigation}) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    navigation.navigate('EditProduct', {productId: id});
  };

  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'do you want to delete this product?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(productActions.deleteProduct(id));
        },
      },
    ]);
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          itemData={itemData}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}>
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              deleteHandler(itemData.item.id);
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 18,
                  marginRight: 3,
                }}>
                Delete
              </Text>
              <Feather name="trash" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </ProductItem>
      )}
    />
  );
};

export default UserProductScreen;
