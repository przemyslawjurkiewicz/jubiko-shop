import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let initState = localStorage.getItem('addedToCart')
  ? JSON.parse(localStorage.getItem('addedToCart'))
  : {
      addedToCart: [],
      summary: 0
    };

const middleware = [thunk];

const store = createStore(
  rootReducer,
  { cart: initState },
  compose(applyMiddleware(...middleware))
);

store.subscribe(() => {
  localStorage.setItem('addedToCart', JSON.stringify(store.getState().cart));
});
export default store;
