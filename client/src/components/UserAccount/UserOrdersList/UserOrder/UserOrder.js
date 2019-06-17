import React from 'react';
import './UserOrder.scss';

import ProductList from './ProductsList/ProductList';

const UserOrder = props => (
  <div className='d-flex flex-nowrap flex-column align-items-center justify-content-center'>
    <div className='d-flex flex-nowrap flex-row align-content-center justify-content-start'>
      <p className='summary m-2'>
        Zamówienie: {props.order.id.slice(0, 8)}
      </p>
      <p className='summary m-2'>Z dnia: {props.order.date}</p>
    </div>
    <div className='p-2 col-12'>
      <ProductList products={props.order.products} />
    </div>
    <p className='summary align-self-end'>
      Razem:{' '}
      {props.order.summary.toLocaleString('pl-PL', {
        minimumFractionDigits: 2
      })}{' '}
      zł
    </p>
  </div>
);

export default UserOrder;
