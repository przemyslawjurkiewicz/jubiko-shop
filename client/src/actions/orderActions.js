import {GET_USER_ORDERS, IS_LOADING} from '../actions/types';
import axios from 'axios';

export const addOrder = (orderData, history) => dispatch => {
  axios
    .post('/api/orders/order', orderData)
    .then(res => history.push('/konto')) // re-direct to UserAccount on confirm
    .catch(err => {
      console.log(err);
    });
};

export function getOrdersByUserId(id) {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios
      .get(`/api/orders/order/${id}`)
      .then(response => {
        dispatch(getOrders(response.data.orders));
        dispatch(setIsLoading(false));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const getOrders = orders => {
  return {
    type: GET_USER_ORDERS,
    orders
  };
};

export const setIsLoading = payload => {
  return {
    type: IS_LOADING,
    payload
  };
};