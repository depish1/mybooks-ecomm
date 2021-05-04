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
    case types.REMOVE_PRODUCT:
      return {
        ...state,
        list: state.list.filter((prod) => prod.id !== action.id),
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
