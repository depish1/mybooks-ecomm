import types from './types';

const setProducts = (products) => ({
  type: types.SET_PRODUCTS,
  products,
});

const actions = {
  setProducts,
};

export default actions;
