import commerce from '../../lib/commerce'
import { CLEAR_CUSTOMER, SET_CUSTOMER } from './actionTypes';

/**
 * Fetch the customer information from Commerce.js. If the customer is not
 * logged in yet, an empty promise will be returned.
 */
export const setCustomer = () => (dispatch) => {
  // First check is customer is logged in and just return out if they're not
  const isLoggedIn = commerce.customer.isLoggedIn();
  if (!isLoggedIn || isLoggedIn === false) {
    dispatch({ type: CLEAR_CUSTOMER });
    return Promise.resolve(null);
  }
  return commerce.customer.about().then((customer) => {
    dispatch({ type: SET_CUSTOMER, payload: customer });
  }).catch(() => {
    // Most likely a 404, meaning the customer doesn't exist. It should be logged out
    commerce.customer.logout();
    dispatch({ type: CLEAR_CUSTOMER });
  });
}

/**
 * Clear the logged in customer from state, and from Commerce.js.
 */
export const clearCustomer = () => (dispatch) => {
  commerce.customer.logout();
  dispatch({ type: CLEAR_CUSTOMER });
}
