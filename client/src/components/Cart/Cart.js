import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import CartProductList from './ProductsList/CartProductList';
import {
  onQuantityAdd,
  onQuantityRemove,
  onCartRemove,
  onCartRemoveAll
} from '../../actions/cartActions';
import classnames from 'classnames';

// Import style
import './Cart.scss';

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: 0
    };
  }

  onQuantityRemove(product) {
    this.props.onQuantityRemove(product);
  }

  onQuantityAdd(product) {
    this.props.onQuantityAdd(product);
  }

  onCartRemove(product) {
    this.props.onCartRemove(product);
  }
  onCartRemoveAll() {
    this.props.onCartRemoveAll();
  }

  render() {
    console.log(this.props.summary);
    return (
      <div className='cart d-flex flex-nowrap flex-column align-items-center justify-content-center'>
        <h4 className='align-self-start'>Twój koszyk:</h4>
        <CartProductList
          products={this.props.addedToCart}
          onQuantityAdd={this.onQuantityAdd.bind(this)}
          onQuantityRemove={this.onQuantityRemove.bind(this)}
          onCartRemove={this.onCartRemove.bind(this)}
        />
        <p className='summary align-self-end'>
          Razem:
          {this.props.summary.toLocaleString('pl-PL', {
            minimumFractionDigits: 2
          })}
          zł
        </p>
        <div className='d-flex flex-row justify-content-around align-self-end'>
          <button
            onClick={() => this.onCartRemoveAll()}
            className={classnames('btn btn-secondary btn-sm m-2', {
              'd-none': this.props.summary === 0
            })}
          >
            WYCZYŚĆ KOSZYK
          </button>
          <NavLink to='/zamowienie' exact={true}>
            <button
              className={classnames('btn btn-primary m-2', {
                'd-none': this.props.summary === 0
              })}
            >
              ZAMÓW
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedToCart: state.cart.addedToCart,
  summary: state.cart.summary
});

const mapDispatchToProps = {
  onQuantityAdd,
  onQuantityRemove,
  onCartRemove,
  onCartRemoveAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
