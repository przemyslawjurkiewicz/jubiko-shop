import React from 'react';

// Import components
import ProductCard from './ProductCard/ProductCard';

const ProductList = props => (
  <div className="d-flex flex-wrap justify-content-center">
    <div className="p-2 col-12">
      <ul className="list-group">
        {props.products.map((product, i) => {
          return (
            <li key={i} className="list-group-item">
              <ProductCard
                product={product}
              />
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default ProductList;
