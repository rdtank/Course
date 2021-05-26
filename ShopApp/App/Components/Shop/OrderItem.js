import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Colors from '../../Utility/Colors';
import CartItem from './CartItem';

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const {item} = props.itemData;

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.amount}>${item.totalAmount.toFixed(2)}</Text>
        <Text style={styles.date}>{item.readableDate}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailsItem}>
          {item.items.map((cartItem) => (
            <CartItem itemData={cartItem} />
          ))}
        </View>
      )}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  amount: {
    fontFamily: 'Lemonada-Bold',
    fontSize: 14,
  },
  date: {
    fontFamily: 'Lemonada-Regular',
    fontSize: 14,
    color: '#888',
  },
  detailsItem: {
    width: '100%',
  },
});
