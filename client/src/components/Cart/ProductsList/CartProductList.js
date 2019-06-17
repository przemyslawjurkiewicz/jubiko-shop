import React from 'react';

// Import components
import CartProductCard from './CartProductCard/CartProductCard';

const CartProductList = props => (
  <div className='d-flex flex-wrap justify-content-center'>
    <div className='p-2 col-12'>
      <ul className='list-group'>
        {props.products.map((product, i) => {
          return (
            <li key={i} className='list-group-item'>
              <CartProductCard
                product={product}
                onQuantityAdd={() => props.onQuantityAdd(product._id)}
                onQuantityRemove={() => props.onQuantityRemove(product._id)}
                onCartRemove={() => props.onCartRemove(product._id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default CartProductList;
