import types from './types';

const initial_basket = {
  list: [],
};

const basketReducer = (state = initial_basket, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return {
        ...state,
        list: [...state.list, action.product],
      };
    case types.REMOVE_ONE_PRODUCT:
      const specificProdArr = state.list.filter((prod) => prod.id === action.id).pop();
      const withoutProdArr = state.list.filter((prod) => prod.id !== action.id);
      return {
        ...state,
        list: [...specificProdArr, ...withoutProdArr],
      };
    case types.REMOVE_PRODUCT:
      const newProdList = state.list.filter((prod) => prod.prod_id !== action.id);
      return {
        ...state,
        list: [...newProdList],
      };
    case types.CLEAR_BASKET:
      return {
        list: [],
      };
    default:
      return state;
  }
};

export default basketReducer;
