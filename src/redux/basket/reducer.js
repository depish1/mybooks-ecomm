import types from './types';
import { reduceBasket } from 'utils/helpers';

const initial_basket = {
  list: [],
  unique: [],
};

const basketReducer = (state = initial_basket, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return {
        list: [...state.list, action.product],
        unique: reduceBasket([...state.list, action.product]),
      };
    case types.REMOVE_ONE_PRODUCT:
      const specificProdArr = state.list.filter((prod) => prod.id === action.id).pop();
      const withoutProdArr = state.list.filter((prod) => prod.id !== action.id);
      return {
        list: [...specificProdArr, ...withoutProdArr],
        unique: reduceBasket([...specificProdArr, ...withoutProdArr]),
      };
    case types.REMOVE_PRODUCT:
      const newProdList = state.list.filter((prod) => prod.prod_id !== action.id);
      return {
        list: [...newProdList],
        unique: reduceBasket([...newProdList]),
      };
    case types.CLEAR_BASKET:
      return {
        list: [],
        unique: [],
      };
    default:
      return state;
  }
};

export default basketReducer;
