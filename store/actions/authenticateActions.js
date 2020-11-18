import commerce from '../../lib/commerce'
import Router from 'next/router';

import { SET_CUSTOMER } from './actionTypes';

/**
 * Async get customer
 */
export const setCustomer = () => (dispatch) => {
  // First check is customer is logged in
  const isLoggedIn = commerce.customer.isLoggedIn();
  // If false redirect to /login
  if (!isLoggedIn || isLoggedIn === false) {
    return;
  }
  return commerce.customer.about().then((customer) => {
    dispatch({ type: SET_CUSTOMER, payload: customer.data })
  });
}
