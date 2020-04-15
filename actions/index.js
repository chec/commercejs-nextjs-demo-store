// Cart action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'

// Cart create actions
export const addToCart = productId => {
  return {
    type: ADD_TO_CART,
    payload: productId
  }
};

export const removeFromCart = itemId => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId
  }
};

export const updateCartItem = itemId => {
  return {
    type: UPDATE_CART_ITEM,
    payload: itemId
  }
};
