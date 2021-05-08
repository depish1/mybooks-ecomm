import types from './types';

const login = (userData) => ({
  type: types.LOG_IN,
  userData,
});
const logout = () => ({
  type: types.LOG_OUT,
});

const actions = {
  login,
  logout,
};

export default actions;
