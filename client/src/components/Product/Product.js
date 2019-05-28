import React, { Component } from 'react';

// Import style
import './Product.scss'

// Import products
import Products from '../../assets/Products';

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            id: parseInt(this.props.match.params.id)
        };
    }

    componentWillMount() {
        this.setState(
            { product: Products.find((item => item.id === this.state.id)) }
        )
    }

    render() {
        console.log(this.state.product)
        return (
            <div className="product d-flex flex-md-row flex-nowrap flex-column align-items-center justify-content-center">
                <img className="col-md-4 col-12 w-auto p-3" src={this.state.product.imgSrc} alt={this.state.product.name} />
                <div className="col-md-8 col-12">
                    <h1>{this.state.product.name}</h1>
                    <p className="price ">{this.state.product.price.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł</p>
                    <p>{this.state.product.description}</p>
                    <p><button className="btn btn-primary">Do koszyka</button></p>
                </div>
            </div>
        );
    }
}

export default Product;