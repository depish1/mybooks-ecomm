import types from './types';

const initial_basket = {
  isOpen: false,
};

const menuReducer = (state = initial_basket, action) => {
  switch (action.type) {
    case types.SWITCH_MENU:
      return {
        isOpen: !state.isOpen,
      };
    case types.CLOSE_MENU:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

export default menuReducer;
