import types from './types';

const initial_products = {};

const productsReducer = (state = initial_products, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {
        list: action.products,
      };
    default:
      return state;
  }
};

export default productsReducer;
