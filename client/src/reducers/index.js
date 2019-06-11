import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cart from './cartReducer';
import authReducer from './authReducers';
import errorReducer from './errorReducers';

const rootReducer = combineReducers({
  cart,
  products: productsReducer,
  auth: authReducer,
  errors: errorReducer
});

export default rootReducer;
