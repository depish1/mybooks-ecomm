import types from './types';

const setLoader = (isLoader) => ({
  type: types.SET_LOADER,
  isLoader,
});

const actions = {
  setLoader,
};

export default actions;
