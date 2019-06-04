import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductId } from '../../actions/productsActions';
import { addToCart } from '../../actions/cartActions';

// Import style
import './Product.scss';

export class Product extends Component {
  componentDidMount() {
    this.props.getProductId(this.props.match.params.id);
  }

  onAddToCartClic(product) {
    this.props.addToCart(product);
    //localStorage.setItem('addedToCart',JSON.stringify(this.props.addedToCart))
    console.log(this.props.addedToCart);
  }

  render() {
    console.log(this.props.loading);
    console.log(this.props.selectedProduct);
    return (
      <div>
        {this.props.loading && (
          <div className="product d-flex flex-md-row flex-nowrap flex-column align-items-center justify-content-center">
            <p>Loading</p>
          </div>
        )}
        {!this.props.loading && (
          <div className="product d-flex flex-md-row flex-nowrap flex-column align-items-center justify-content-center">
            <img
              className="col-md-4 col-12 w-auto p-3"
              src={this.props.selectedProduct.imgSrc}
              alt={this.props.selectedProduct.name}
            />
            <div className="col-md-8 col-12">
              <h1>{this.props.selectedProduct.name}</h1>

              <p>{this.props.selectedProduct.description}</p>
              <p>
                <button className="btn btn-primary" onClick={()=>this.onAddToCartClic(this.props.selectedProduct)} >Do koszyka</button>
              </p>
            </div>
          </div>
        )}
      </div>
    );    
  }
}

const mapStateToProps = state => ({
  selectedProduct: state.products.selectedProduct,
  loading: state.products.loading,
  addedToCart: state.cart.addedToCart
});

const mapDispatchToProps = {
  getProductId,
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
