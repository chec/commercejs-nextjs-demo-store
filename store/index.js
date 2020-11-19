import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

import {
  STORE_PRODUCTS,
  STORE_CATEGORIES,
  RETRIEVE_CART_SUCCESS,
  ADD_TO_CART_SUCCESS,
  UPDATE_CART_ITEM_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  CAPTURE_ORDER_SUCCESS,
  GENERATE_CHECKOUT_TOKEN,
  GET_SHIPPING_OPTIONS,
  REMOVE_SHIPPING_OPTIONS,
  UPDATE_CHECKOUT_LIVE_OBJECT,
  ABORT_CHECKOUT,
  SET_CUSTOMER,
  CLEAR_CUSTOMER,
} from './actions/actionTypes';

// Declare initial state
const initialState = {
  categories: [],
  products: [],
  cart: {},
  checkout: {
    shippingOptions: [],
    checkoutTokenObject: {},
  },
  orderReceipt: null,
  customer: null,
};

// Create reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      // These are server side rendered from MyApp.getInitialProps, everything else should
      // come from client side state and should not be overwritten here by subsequent server
      // side hydration actions.
      const { categories, products } = action.payload;

      return {
        ...state,
        categories,
        products,
      };
    // Dispatch in App SSR
    // Check if action dispatched is STORE_CATEGORIES and act on that
    case STORE_CATEGORIES:
      return { ...state, categories: action.payload };
    // Dispatch in App SSR
    // Check if action dispatched is STORE_PRODUCTS and act on that
    case STORE_PRODUCTS:
      return { ...state, products: action.payload };
    // Dispatch in App client-side
    // Check if action dispatched is SET_CUSTOMER and act on that
    case CLEAR_CUSTOMER:
      return { ...state, customer: null };
    case SET_CUSTOMER:
      return { ...state, customer: action.payload };
    // Dispatch in Product client-side
    // Check if action dispatched is STORE_CART and act on that
    case RETRIEVE_CART_SUCCESS:
      return { ...state, cart: action.payload };
    // Dispatch in ProductDetail client-side
    // Check if action dispatched is ADD_TO_CART and act on that
    case ADD_TO_CART_SUCCESS:
      return { ...state, cart: action.payload.cart };
    // Dispatch in Cart client-side
    // Check if action dispatched is UPDATE_CART_ITEM and act on that
    case UPDATE_CART_ITEM_SUCCESS:
      return { ...state, cart: action.payload.cart };
    // Dispatch in Cart client-side
    // Check if action dispatched is REMOVE_FROM_CART and act on that
    case REMOVE_FROM_CART_SUCCESS:
      return { ...state, cart: action.payload.cart };
    // Dispatch in Checkout client-side
    case GENERATE_CHECKOUT_TOKEN:
      return { ...state, checkout: { ...state.checkout, checkoutTokenObject: action.payload }};
    // Dispatch in Checkout client-side
    case GET_SHIPPING_OPTIONS:
      return { ...state, checkout: { ...state.checkout, shippingOptions: action.payload }};
    // Dispatch in Checkout client-side
    case REMOVE_SHIPPING_OPTIONS:
      return { ...state, checkout: { ...state.checkout, shippingOptions: [] }};
    // Dispatch in Checkout client-side
    case UPDATE_CHECKOUT_LIVE_OBJECT:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          checkoutTokenObject: {
            ...state.checkout.checkoutTokenObject,
            live: action.payload
          },
        },
      };
    // Dispatch in Checkout client-side
    case ABORT_CHECKOUT:
      return { ...state, checkout: initialState.checkout };
    // Dispatch in Checkout client-side
    case CAPTURE_ORDER_SUCCESS:
      return { ...state, checkout: initialState.checkout, orderReceipt: action.payload };
    default:
      return state;
  }
};

// Enable Redux dev tools
const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__(
    { trace: true, traceLimit: 25 }
  )
  : f => f;

// Create a makeStore function and pass in reducer to create the store
const makeStore = () => {
  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk), devtools)
  );
};

const debug = !process.env.NETLIFY;

// Export an assembled wrapper with store's data
export const wrapper = createWrapper(makeStore, { debug });
