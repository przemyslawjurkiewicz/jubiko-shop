import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cart from './cartReducer';
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import ordersReducer from'./ordersReducer';

const rootReducer = combineReducers({
  cart,
  orders: ordersReducer,
  products: productsReducer,
  auth: authReducer,
  errors: errorReducer
});

export default rootReducer;
