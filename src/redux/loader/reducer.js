import types from './types';

const initial_user = { isLoader: false };

const userReducer = (state = initial_user, action) => {
  switch (action.type) {
    case types.setLoader:
      return {
        isLoader: action.userData,
      };
    default:
      return state;
  }
};

export default userReducer;
