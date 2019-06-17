import React from 'react';
//import { NavLink } from 'react-router-dom';
import './ProductCard.scss';

const CartProductCard = props => (
  <div className=' d-flex flex-row flex-nowrap justify-content-between align-items-center'>
    <div className='col-3 '>
      <img
        className='w-75 h-auto'
        src={props.product.imgSrc}
        alt={props.product.name}
      />
    </div>
    <div className='cart-card col-9 d-flex flex-column flex-md-row flex-nowrap justify-content-between align-items-center'>
      <div>
        <h5 className='card-title'>{props.product.name}</h5>
        <p className='card-text'>{props.product.shortDescription}</p>
      </div>
      <p className='price'>
        {props.product.price.toLocaleString('pl-PL', {
          minimumFractionDigits: 2
        })}{' '}
        zł{' '}
      </p>
    </div>
  </div>
);

export default CartProductCard;
