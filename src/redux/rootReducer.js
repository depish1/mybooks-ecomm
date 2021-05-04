import { combineReducers } from 'redux';
import basketReducer from './basket/index';
import productsReducer from './products/index';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});

export default rootReducer;
