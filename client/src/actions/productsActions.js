import axios from 'axios';

import { GET_PRODUCTS } from './types';

export function getProducts() {
    return (dispatch) => {
        axios
        .get('/api/products')
        .then(response => {
          dispatch({
            type: GET_PRODUCTS,
            payload: response.data.products
          });
        })
        .catch(error => {
          console.log(error);
        });
    };
  }

