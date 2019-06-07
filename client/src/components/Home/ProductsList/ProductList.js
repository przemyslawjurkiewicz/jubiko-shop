import React from 'react';

// Import components
import PorductCard from './ProductCard/ProductCard';

const ProductList = props => (
  <div className="d-flex flex-wrap justify-content-start ">
    {props.products.map((product, i) => {
      return (
        <div className="p-2 col-md-6 col-12 " key={i}>
          <PorductCard product={product} onAddToCartClic={(event)=>props.onAddToCartClic(product,event)} />
        </div>
      );
    })}
  </div>
);

export default ProductList;
