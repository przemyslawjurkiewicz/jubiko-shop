import React from 'react';
// Import components
import PorductCard from './ProductCard/ProductCard';
import Fade from 'react-reveal/Fade';

const ProductList = props => (
  <div className="d-flex flex-wrap flex-row justify-content-start card-deck">
    {props.products.map((product, i) => {
      return (
        <Fade key={i}>
        <div className="p-2 col-md-6 col-12 " >
          <PorductCard
            product={product}
            onAddToCartClic={event => props.onAddToCartClic(product, event)}
          />
        </div>
        </Fade>
      );
    })}
  </div>
);

export default ProductList;
