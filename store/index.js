import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../actions'

// Declare initial state
const initialState = {
  categories: [],
  products: [],
  cart: []
};


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
    case UPDATE_CART_ITEM:
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
const debug = !process.env.NETLIFY;
export const wrapper = createWrapper(makeStore, { debug });
