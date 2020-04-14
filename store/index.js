import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

// Declare initial state
const initialState = {
  categories: [],
  products: [],
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
