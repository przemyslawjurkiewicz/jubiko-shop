import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
  cart,
  products: productsReducer
});

export default rootReducer;
