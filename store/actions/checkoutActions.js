import commerce from '../../lib/commerce';

import {
  GET_SHIPPING_OPTIONS,
  GENERATE_CHECKOUT_TOKEN,
} from './actionTypes';


// utilize commerce.js checkout helper, commerce.checkout.getShippingOptions
// to return lsit of available shipping methods for the provided checkout token
export const getShippingOptionsForCheckout = (checkoutId, country = 'US', region = "") => async (dispatch) => {
  try {
    const shippingOptions = await commerce.checkout.getShippingOptions(checkoutId, { country });
    dispatch({
      type: GET_SHIPPING_OPTIONS,
      payload: shippingOptions,
    })
  } catch (error) {
    console.log('error while fetching list of available shipping options', error);
    throw error;
  }
}

// uitlize commerce.js checkout generateToken method to
// generate a checkout token object from a cart.id
// which can be used to initiate the process of capturing an order
export const generateCheckoutTokenFromCart = (cartId) => async (dispatch) => {
  try {
    const checkout = await commerce.checkout.generateToken(cartId, { type: 'cart' });
    dispatch({
      type: GENERATE_CHECKOUT_TOKEN,
      payload: checkout,
    })
    return checkout;
  } catch (error) {
    console.log('error while generating checkout token object');
    throw error; // throwing here allows us to also catch error in caller land—the component
  }
}



