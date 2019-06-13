import {ADD_ORDER} from '../actions/types';
import axios from 'axios';

export const addOrder = (orderData, history) => dispatch => {
  axios
    .post('/api/orders/order', orderData)
    //.then(res => history.push('/login')) // re-direct to login on confirm
    .catch(err => {
      console.log(err);
    });
};
