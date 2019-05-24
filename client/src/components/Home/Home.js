import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Import products
import Products from '../../assets/Products'

// Import ccomponents
import PorductCart from './ProductCart/ProductCart';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Products,
    };
  }

  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <div className="col-md-4 col-12 align-items-end">
          <ul className="nav flex-md-column flex-row align-items-start justify-content-center">
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" className="nav-link" exact={true}>Kolczyki</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" className="nav-link" exact={true} >Pierścionki</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" className="nav-link" exact={true}>Bransoletki</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" className="nav-link" exact={true}>Broszki</NavLink>
            </li>
          </ul>

        </div>
        <div className="col-md-8 col-12 d-flex flex-wrap justify-content-center">
          {this.state.products.map(product => {
            return (
              <div className="p-2 col-md-6 col-12" key={product.id}>
                <PorductCart product={product} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;
