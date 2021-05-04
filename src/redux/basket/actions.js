import types from './types';

const add = (product) => ({
  type: types.ADD_PRODUCT,
  product,
});

const remove = (id) => ({
  type: types.DELETE_PRODUCT,
  id,
});
const clear = (id) => ({
  type: types.CLEAR_BASKET,
  id,
});

const actions = {
  add,
  remove,
  clear,
};

export default actions;
