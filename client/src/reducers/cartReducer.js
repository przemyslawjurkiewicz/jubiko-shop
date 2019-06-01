import { ADD_TO_CART } from '../actions/types';

const initialState = {
  addedToCart: [],
  summary: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
   
      return { addedToCart: [...state.addedToCart, action.product] };

    default:
      return state;
  }
}
