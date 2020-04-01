import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const initialState = {
  categories: [],
  products: [],
};

// create your reducer
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

// create a makeStore function
const makeStore = () => {
  return createStore(reducer);
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
