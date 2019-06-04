import {
  ADD_TO_CART,
  CARD_REMOVE,
  QUANTITY_ADD,
  QUANTITY_REMOVE
} from '../actions/types';

const initialState = {
  addedToCart: [],
  summary: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const add = [...state.addedToCart, action.product];
      const formated = add.map(p => {
        return p._id === action.product._id
          ? Object.assign({}, p, { quantity: p.quantity + 1 })
          : p;
      });
      const added = formated
        .map(e => e['_id'])
        //store keys of uniqe ojects
        .map((e, i, final) => final.indexOf(e) === i && i)
        //eliminate the dead keys & store uniqe elemnts
        .filter(e => formated[e])
        .map(e => formated[e]);

      return Object.assign({}, state, {
        addedToCart: added
      });

    case QUANTITY_ADD:
      const addedQuantity = state.addedToCart.map(p => {
        return p._id === action.product
          ? Object.assign({}, p, { quantity: p.quantity + 1 })
          : p;
      });
      return Object.assign({}, state, {
        addedToCart: addedQuantity
      });

    case QUANTITY_REMOVE:
      const removedQuantity = state.addedToCart.map(p => {
        return p._id === action.product
          ? Object.assign({}, p, { quantity: p.quantity - 1 })
          : p;
      });
      return Object.assign({}, state, {
        addedToCart: removedQuantity
      });

    case CARD_REMOVE:
      console.log(state.addedToCart);
      return {
        addedToCart: state.addedToCart.filter(p => p._id !== action._id)
      };

    default:
      return state;
  }
}
