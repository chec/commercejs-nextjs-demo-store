import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

// Declare initial state
const initialState = {
  categories: [],
  products: [],
  cart: {}
};

// Cart action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QTY = 'UPDATE_QTY';


// Create your reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'STORE_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'STORE_PRODUCTS':
      return { ...state, products: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: action.payload.cart }
    case REMOVE_FROM_CART:
        return { ...state, cart: action.payload.cart }
    case UPDATE_QTY:
      return { ...state, cart: action.payload.cart }
    default:
      return state;
  }
};

// Create a makeStore function and pass reducer to createStore
const makeStore = () => {
  return createStore(reducer);
};

// Export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
