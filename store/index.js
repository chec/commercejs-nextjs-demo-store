import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

// Define action types
const STORE_CATEGORIES = 'STORE_CATEGORIES'
const STORE_PRODUCTS = 'STORE_PRODUCTS'
const STORE_CART = 'STORE_CART'
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'


// Declare initial state
const initialState = {
  categories: [],
  products: [],
  cart: {}
};

// Create reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload  };
    // Dispatch in App SSR
    case STORE_CATEGORIES:
      return { ...state, categories: action.payload };
    case STORE_PRODUCTS:
      return { ...state, products: action.payload };
    // Dispatch in Product client-side
    case STORE_CART:
      return { ...state, cart: action.payload };
    // Dispatch in ProductDetail client-side
    case ADD_TO_CART:
      return { ...state, cart: action.payload }
    // Dispatch in Cart client-side
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload }
    case UPDATE_CART_ITEM:
      return { ...state, cart: action.payload }
    default:
      return state;
  }
};

// Create a makeStore function and pass reducer to createStore
const makeStore = () => {
  return createStore(reducer);
};

// Export an assembled wrapper
const debug = !process.env.NETLIFY;
export const wrapper = createWrapper(makeStore, { debug });
