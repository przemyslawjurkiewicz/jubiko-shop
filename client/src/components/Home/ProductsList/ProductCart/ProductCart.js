import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductCart.scss';


const ProductCart = props => (

  <NavLink
    exact to={"/product/" + props.product._id}
    className="card-deck">
    <div className="card">
      <img
        src={props.product.imgSrc}
        className="card-img-top"
        alt={props.product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">{props.product.shortDescription}</p>
        <div className="d-flex align-items-center justify-content-around">
          <p className="price ">{props.product.price.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</p>
          <p><button className="btn btn-primary btn-sm">Do koszyka</button></p>
        </div>
      </div>
    </div>

  </NavLink>
);

export default ProductCart;
