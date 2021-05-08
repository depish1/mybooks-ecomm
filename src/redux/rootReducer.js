import { combineReducers } from 'redux';
import basketReducer from './basket/index';
import productsReducer from './products/index';
import menuReducer from './menu/index';
import userReducer from './user/index';
import loaderReducer from './loader/index';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  menu: menuReducer,
  user: userReducer,
  loader: loaderReducer,
});

export default rootReducer;
