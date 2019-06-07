import axios from 'axios';

import { GET_PRODUCTS, GET_PRODUCT, IS_LOADING, CHANGE_CATEGORY, SORT_PRODUCTS } from './types';

export function getAllProducts() {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios
      .get('/api/products')
      .then(response => {
        dispatch(getProducts(response.data.products));
        dispatch(setIsLoading(false));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getProductId(id) {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios
      .get(`/api/products/product/${id}`)
      .then(response => {
        dispatch(getProduct(response.data.product));
        dispatch(setIsLoading(false));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products
  };
};

export const getProduct = product => {
  return {
    type: GET_PRODUCT,
    product
  };
};

export const setIsLoading = payload => {
  return {
    type: IS_LOADING,
    payload
  };
};

export const onChangeCategory = (products, category)=> {
  return {
    type: CHANGE_CATEGORY,
    category,
    products
  };
};

export const onChangeSort = (event)=> {
  return {
    type: SORT_PRODUCTS,
    event
  };
};
