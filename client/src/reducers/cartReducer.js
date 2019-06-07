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
        addedToCart: added,
        summary: added.reduce((a, { price, quantity }) => {
          return a + Number(price) * quantity;
        }, 0)
      });

    case QUANTITY_ADD:
      const addedQuantity = state.addedToCart.map(p => {
        return p._id === action.product
          ? Object.assign({}, p, { quantity: p.quantity + 1 })
          : p;
      });
      return Object.assign({}, state, {
        addedToCart: addedQuantity,
        summary: addedQuantity.reduce((a, { price, quantity }) => {
          return a + Number(price) * quantity;
        }, 0)
      });

    case QUANTITY_REMOVE:
      const removedQuantity = state.addedToCart.map(p => {
        return p._id === action.product
          ? Object.assign({}, p, {
              quantity: p.quantity > 0 ? p.quantity - 1 : 0
            })
          : p;
      });
      const removedQuantityMatchZero = removedQuantity.filter(
        p => p.quantity !== 0
      );
      return Object.assign({}, state, {
        addedToCart: removedQuantityMatchZero,
        summary: removedQuantityMatchZero.reduce((a, { price, quantity }) => {
          return a + Number(price) * quantity;
        }, 0)
      });

    case CARD_REMOVE:
      const notRemovedFromCart = state.addedToCart.filter(p => p._id !== action.product)
      return {
        addedToCart: notRemovedFromCart,
        summary: notRemovedFromCart.reduce((a, { price, quantity }) => {
          return a + Number(price) * quantity;
        }, 0)
      };

    default:
      return state;
  }
}
