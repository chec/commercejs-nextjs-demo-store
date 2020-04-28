import commerce from '../../lib/commerce'

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
export const retrieveCartSuccess = (cart) => {
  return {
    type: RETRIEVE_CART_SUCCESS,
    payload: cart
  }
}

/**
 * Async retrieve cart from API
 */
export const retrieveCart = () => async (dispatch, getState) => {
  try {
    // Fetch cart from commerce
    const cart = await commerce.cart.retrieve();
    // Dispatch retrieve cart action after successful response
    dispatch(retrieveCartSuccess(cart));
  } catch (err) {
    console.log('error retrieving cart', err);
  }
};

export const addToCartSuccess = (product) => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: product
  }
}

export const addToCart = (productId, quantity, selectedOption) => async (dispatch) => {
  try {
    const product = await commerce.cart.add(productId, quantity, selectedOption);
    dispatch(addToCartSuccess(product))
  } catch (err) {
    console.log('error adding product to cart', err)
  }
};

export const updateCartItemSuccess = (item) => {
  return {
    type: UPDATE_CART_ITEM_SUCCESS,
    payload: item
  }
}

export const updateCartItem = (lineItemId, quantity) => async (dispatch) => {

  try {
    const item = await commerce.cart.update(lineItemId, { quantity });

    dispatch(updateCartItemSuccess(item))
  } catch (err) {
    console.log('error updating cart item', err)
  }
};

export const removeFromCartSuccess = (item) => {
  return {
    type: REMOVE_FROM_CART_SUCCESS,
    payload: item
  }
}

export const removeFromCart = (lineItemId) => async (dispatch) => {
  try {
    const item = await commerce.cart.remove(lineItemId);
    dispatch(removeFromCartSuccess(item))
  } catch (err) {
    console.log('error removing item from cart', err)
  }
};
