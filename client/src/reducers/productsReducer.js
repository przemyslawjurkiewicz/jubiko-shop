import { GET_PRODUCTS } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}