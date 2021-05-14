import types from './types';

const initial_user = localStorage.getItem('myValueInLocalStorage') || {};

const userReducer = (state = initial_user, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        userData: action.userData,
      };
    case types.LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
