import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../Utility/Colors';

const CartItem = (props) => {
  let item;
  if (props.deletable) {
    item = props.itemData.item;
  } else {
    item = props.itemData;
  }
  console.log(item);

  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{item.quantity} </Text>
        <Text style={styles.mainText}>{item.productTitle}</Text>
      </View>

      <View
        style={[styles.itemData, {marginLeft: 20, justifyContent: 'flex-end'}]}>
        <Text style={styles.mainText}>
          ${Math.round(item.sum.toFixed(2) * 100) / 100}
        </Text>
        {props.deletable && (
          <TouchableOpacity onPress={props.onRemove} style={styles.delete}>
            <Feather name="trash" size={20} color="darkred" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  itemData: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'Lemonada-Regular',
    color: '#888',
    fontSize: 16,
  },
  mainText: {
    fontFamily: 'Lemonada-Bold',
    fontSize: 14,
    marginLeft: 5,
  },

  delete: {
    marginLeft: 20,
  },
});
