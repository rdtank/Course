import {ADD_TO_CART, REMOVE_FROM_CART} from '../Actions/Cart';
import CartItem from '../../Models/Cart-Item';
import {ADD_ORDER} from '../Actions/Orders';
import {DELETE_PRODUCT} from '../Actions/Product';
const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      let updateOrNewItem;

      if (state.items[addedProduct.id]) {
        updateOrNewItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice,
        );
      } else {
        updateOrNewItem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice,
        );
      }
      return {
        ...state,
        items: {...state.items, [addedProduct.id]: updateOrNewItem},
        totalAmount: state.totalAmount + productPrice,
      };

    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;

      let updatedCartItems;

      if (currentQty > 1) {
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice,
        );
        updatedCartItems = {...state.items, [action.pid]: updatedCartItem};
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };
    case ADD_ORDER:
      return initialState;

    case DELETE_PRODUCT:
      if (!state.items[action.pid]) {
        return state;
      }
      const updatedItems = {...state.items};
      const itemTotal = state.items[action.pid].sum;
      delete updatedItems[action.pid];
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - itemTotal,
      };
    default:
      break;
  }
  return state;
};
