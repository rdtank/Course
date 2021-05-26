import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from '../../../Components/Shop/OrderItem';

const OrderScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <OrderItem itemData={itemData} />}
    />
  );
};

export default OrderScreen;
