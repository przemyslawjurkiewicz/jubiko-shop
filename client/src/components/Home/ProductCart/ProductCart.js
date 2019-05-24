import React from 'react';
import './ProductCart.scss'


const ProductCart = (props) => (
    <div className="card">
        <img src={props.product.imgSrc} className="card-img-top" alt={props.product.name} />
        <div className="card-body">
            <h5 className="card-title">{props.product.name}</h5>
            <p className="card-text">{props.product.description}</p>

        </div>
    </div>
);

export default ProductCart;