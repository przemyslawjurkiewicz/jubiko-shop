import { ADD_TO_CART, CARD_REMOVE, QUANTITY_ADD, QUANTITY_REMOVE, CARD_REMOVE_ALL } from '../actions/types';

export const addToCart = product => {
      return {
      type: ADD_TO_CART,
      product
    };
  };

export const onQuantityAdd = product => {
  return {
    type: QUANTITY_ADD,
    product
  };
};

export const onQuantityRemove = product => {
  return {
    type: QUANTITY_REMOVE,
    product
  };
};

export const onCartRemove = product => {
  return {
    type: CARD_REMOVE,
    product
  };
};

export const onCartRemoveAll = () => {
  return {
    type: CARD_REMOVE_ALL,
  };
};