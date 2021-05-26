import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import CartItem from '../../../Components/Shop/CartItem';
import Colors from '../../../Utility/Colors';
import styles from './CartScreenStyles';
import * as cartAction from '../../../Store/Actions/Cart';
import * as ordersAction from '../../../Store/Actions/Orders';

const CartScreen = () => {
  const cardTotalAmount = useSelector((state) => state.cart.totalAmount);

  const cartItem = useSelector((state) => {
    const transformedItem = [];
    for (const key in state.cart.items) {
      transformedItem.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedItem.sort((a, b) => (a.productId > b.productId ? 1 : -1));
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:
          <Text style={styles.amount}>${cardTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.headerBtn}
          title="Order Now"
          disabled={cartItem.length === 0}
          onPress={() => {
            dispatch(ordersAction.addOrder(cartItem, cardTotalAmount));
          }}
        />
      </View>
      <FlatList
        style={styles.card}
        data={cartItem}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            itemData={itemData}
            deletable
            onRemove={() => {
              dispatch(cartAction.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

export default CartScreen;
