import commerce from '../../lib/commerce';

import {
  GET_SHIPPING_OPTIONS,
  GENERATE_CHECKOUT_TOKEN,
  REMOVE_SHIPPING_OPTIONS,
  UPDATE_CHECKOUT_LIVE_OBJECT,
  ABORT_CHECKOUT,
  CAPTURE_ORDER_SUCCESS,
} from './actionTypes';

// Use commerce.js checkout helper, commerce.checkout.getShippingOptions
// to return list of available shipping methods for the provided checkout token
export const getShippingOptionsForCheckout = (checkoutId, country = 'US') => (dispatch) => {
  return commerce.checkout.getShippingOptions(checkoutId, { country })
    .then(shippingOptions => {
      dispatch({
        type: GET_SHIPPING_OPTIONS,
        payload: shippingOptions,
      })
      return shippingOptions;
    })
    .catch(error => {
      dispatch({ // assuming there are no available shipping options
        type: REMOVE_SHIPPING_OPTIONS
      })
      console.log('error while fetching list of available shipping options', error);
      throw error;
    })
}

// Use commerce.js checkout generateToken method to
// generate a checkout token object from a cart.id
// which can be used to initiate the process of capturing an order
export const generateCheckoutTokenFromCart = (cartId) => (dispatch) => {
  return commerce.checkout.generateToken(cartId, { type: 'cart' }).then(checkout => {
    dispatch({
      type: GENERATE_CHECKOUT_TOKEN,
      payload: checkout,
    })
    return checkout;
  }).catch(error => {
    dispatch({
      type: ABORT_CHECKOUT,
    })
    console.log('error while generating checkout token object');
    throw error;
  })
}

// Validates a shipping method for the provided checkout token, and applies it to the checkout.
export const setShippingOptionInCheckout = (checkoutId, shippingOptionId, country, region) => (dispatch) => {
  return commerce.checkout.checkShippingOption(checkoutId, {
    shipping_option_id: shippingOptionId,
    country,
    region,
  }).then(resp => {
    if (resp.valid) {
      dispatch({
        type: UPDATE_CHECKOUT_LIVE_OBJECT,
        payload: resp.live,
      })
    }
  }).catch(error => {
    console.log('error while attempting to update live object with selected shipping option')
    throw error;
  })
}

// Validates a discount code for the provided checkout token and applies it to the checkout.
export const setDiscountCodeInCheckout = (checkoutId, code) => (dispatch) => {
  return commerce.checkout.checkDiscount(checkoutId, { code })
    .then(resp => {
      dispatch({
        type: UPDATE_CHECKOUT_LIVE_OBJECT,
        payload: resp.live,
      });
      return resp;
    })
    .catch(error => {
      console.log('error while attempting to update live object with discount code');
      throw error;
    })
}

// Captures an order and payment by providing the checkout id and order data derived from checkout
export const captureOrder = (checkoutId, order) => (dispatch) => {
  return commerce.checkout.capture(checkoutId, order)
    .then(resp => {
      // reset checkout, and set global order-receipt state
      dispatch({
        type: CAPTURE_ORDER_SUCCESS,
        payload: resp,
      });
      return resp;
    }).catch(error => {
      console.log('error while attempting to capture order in captureOrder checkout action creator');
      throw error;
    })
}
