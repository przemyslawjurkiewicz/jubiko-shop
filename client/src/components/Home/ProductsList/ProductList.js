import React from 'react';


// Import components
import PorductCart from './ProductCart/ProductCart';

const ProductList = props => (
  <div className="d-flex flex-wrap justify-content-start">
    {props.products.map((product, i) => {
      return (
        <div className="p-2 col-md-6 col-12" key={i}>
          <PorductCart product={product} />
        </div>
      );
    })}
  </div>
);

export default ProductList;
