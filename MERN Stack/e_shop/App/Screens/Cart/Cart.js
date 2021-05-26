import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Container, Left, Right, Text} from 'native-base';
import {connect} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {SwipeListView} from 'react-native-swipe-list-view';

import * as actions from '../../Redux/Actions/CartActions';
import CartItem from './CartItem';

var {height, width} = Dimensions.get('window');

const Cart = (props) => {
  var total = 0;
  props.cartItems.forEach((cart) => {
    return (total += cart.product.price);
  });

  return (
    <>
      {props.cartItems.length ? (
        <Container>
          <SwipeListView
            data={props.cartItems}
            renderItem={(data) => {
              <CartItem item={data} />;
            }}
            renderHiddenItem={(data) => (
              <View>
                <TouchableOpacity>
                  <Feather name="trash" size={30} color="white" />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            rightOpenValue={-75}
            stopLeftSwipe={75}
          />
          <View style={styles.bottomContianer}>
            <Left>
              <Text style={styles.price}>$ {total.toFixed(2)}</Text>
            </Left>
            <Right>
              <Button title="Clear" onPress={() => props.clearCart()} />
            </Right>
            <Right>
              <Button
                title="Checkout"
                onPress={() => props.navigation.navigate('Checkout')}
              />
            </Right>
          </View>
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>Looks like your cart is empty!</Text>
          <Text>Add products to your cart now to get started</Text>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomContianer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: 'white',
    // elevation: 20,
  },
  price: {
    fontSize: 18,
    margin: 20,
    color: 'red',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
