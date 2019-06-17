import {GET_USER_ORDERS, IS_LOADING} from '../actions/types';

const initialState = {
  orders: [],
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return {
        ...state,
        orders: action.orders
      };
    case IS_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
}
