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
  GENERATE_CHECKOUT_TOKEN_SUCCESS,
  CAPTURE_ORDER_SUCCESS
} from './actions/actionTypes';


// Declare initial state
const initialState = {
  categories: [],
  products: [],
  cart: {},
  checkout: {}
};

// Create reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload  };
    // Dispatch in App SSR
    // Check if action dispatched is STORE_CATEGORIES and act on that
    case STORE_CATEGORIES:
      return { ...state, categories: action.payload };
    // Dispatch in App SSR
    // Check if action dispatched is STORE_PRODUCTS and act on that
    case STORE_PRODUCTS:
      return { ...state, products: action.payload };
    // Dispatch in Product client-side
    // Check if action dispatched is STORE_CART and act on that
    case RETRIEVE_CART_SUCCESS:
      return { ...state, cart: action.payload };
    // Dispatch in ProductDetail client-side
    // Check if action dispatched is ADD_TO_CART and act on that
    case ADD_TO_CART_SUCCESS:
      return { ...state, cart: action.payload.cart }
    // Dispatch in Cart client-side
    // Check if action dispatched is UPDATE_CART_ITEM and act on that
    case UPDATE_CART_ITEM_SUCCESS:
      return { ...state, cart: action.payload.cart }
    // Dispatch in Cart client-side
    // Check if action dispatched is REMOVE_FROM_CART and act on that
    case REMOVE_FROM_CART_SUCCESS:
      return { ...state, cart: action.payload.cart }
    default:
      return state;
  }
};

// Enable Redux dev tools
const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f


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
