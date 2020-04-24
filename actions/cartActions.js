import commerce from '../lib/commerce'

import {
  RETRIEVE_CART_SUCCESS,
  ADD_TO_CART_SUCCESS,
  UPDATE_CART_ITEM_SUCCESS,
  REMOVE_FROM_CART_SUCCESS
} from './actionTypes';


// Create all Cart actions, define the callbacks to the reducers

/**
 * Set cart and update Redux store
 */
export const retrieveCartSuccess = cart => {
  return {
    type: RETRIEVE_CART_SUCCESS,
    payload: cart
  }
}

/**
 * Async retrieve cart from API
 */
export const retrieveCart = () => async (dispatch) => {
  try {
    // Fetch cart from commerce
    const cart = await commerce.cart.retrieve();
    // Dispatch retrieve cart action after successful response
    dispatch(retrieveCartSuccess(cart));
  } catch (err) {
    console.log('error retrieving cart', err);
  }
};

export const addToCartSuccess = () => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: cart
  }
}

export const addToCart = (productId, qty, selectedOption) => async (dispatch) => {
  try {
    const { data: cart } = await commerce.cart.add(productId, qty, selectedOption);
    dispatch(addToCartSuccess(cart))
  } catch (err) {
    console.log('error adding product to cart', err)
  }
};

export const removeFromCartSuccess = () => {
  return {
    type: REMOVE_FROM_CART_SUCCESS,
    payload: cart
  }
}

export const removeFromCart = (lineItemId) => async (dispatch) => {
  try {
    const { data: cart } = await commerce.cart.remove(lineItemId);
    dispatch(removeFromCartSuccess(cart))
  } catch (err) {
    console.log('error removing item from cart', err)
  }
};

export const updateCartItemSuccess = () => {
  return {
    type: UPDATE_CART_ITEM_SUCCESS,
    payload: cart
  }
}

export const updateCartItem = (lineItemId, quantity) => async (dispatch) => {
  try {
    const { data: cart } = await commerce.cart.update(lineItemId, quantity);
    dispatch(updateCartItemSuccess(cart))
  } catch (err) {
    console.log('error updating cart item', err)
  }
};
