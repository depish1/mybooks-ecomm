import types from './types';

const add = (product) => ({
  type: types.ADD_PRODUCT,
  product,
});

const removeOneProduct = (id) => ({
  type: types.REMOVE_ONE_PRODUCT,
  id,
});
const removeProduct = (id) => ({
  type: types.REMOVE_PRODUCT,
  id,
});
const clear = (id) => ({
  type: types.CLEAR_BASKET,
  id,
});

const actions = {
  add,
  removeOneProduct,
  removeProduct,
  clear,
};

export default actions;
