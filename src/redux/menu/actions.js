import types from './types';

const switchMenu = () => ({
  type: types.SWITCH_MENU,
});
const closeMenu = () => ({
  type: types.CLOSE_MENU,
});

const actions = {
  switchMenu,
  closeMenu,
};

export default actions;
