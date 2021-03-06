import React from 'react';
import './CartProductCard.scss';

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
      <div className='card-quantity d-flex flex-row justify-content-center align-items-center'>
        <button
          type='button'
          className='btn btn-sm btn-secondary'
          onClick={props.onQuantityAdd}
        >
          +
        </button>
        <p>Ilość: {props.product.quantity}</p>
        <button
          type='button'
          className='btn btn-sm btn-secondary'
          onClick={props.onQuantityRemove}
        >
          -
        </button>
      </div>
      <button
        type='button'
        className='btn btn-sm btn-secondary'
        onClick={props.onCartRemove}
      >
        Usuń
      </button>
    </div>
  </div>
);

export default CartProductCard;
