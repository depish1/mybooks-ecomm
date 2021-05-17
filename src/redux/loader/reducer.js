import types from './types';

const initial_user = { isLoader: false };

const x = (state = initial_user, action) => {
  switch (action.type) {
    case types.SET_LOADER:
      return {
        isLoader: action.isLoader,
      };
    default:
      return state;
  }
};

export default x;

//debug cra in vsc
