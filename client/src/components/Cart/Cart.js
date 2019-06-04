import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartProductList from './ProductsList/CartProductList';
import {
  onQuantityAdd,
  onQuantityRemove,
  onCartRemove
} from '../../actions/cartActions';

// Import style
import './Cart.scss';

export class Cart extends Component {
  onQuantityRemove(product) {
    this.props.onQuantityRemove(product);
  }

  onQuantityAdd(product) {
    this.props.onQuantityAdd(product);
  }
  
  onCartRemove(product) {
    this.props.onCartRemove(product);
  }

  render() {
    console.log(this.props.addedToCart);
    return (
      <div className="cart d-flex flex-nowrap flex-column align-items-center justify-content-center">
        <h2 className="align-self-start">Twój koszyk:</h2>
        <CartProductList
          products={this.props.addedToCart}
          onQuantityAdd={this.onQuantityAdd.bind(this)}
          onQuantityRemove={this.onQuantityRemove.bind(this)}
          onCartRemove={this.onCartRemove.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedToCart: state.cart.addedToCart
});

const mapDispatchToProps = {
  onQuantityAdd,
  onQuantityRemove,
  onCartRemove
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
