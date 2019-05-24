import React, { Component } from 'react';
import PaginationComponent from 'react-reactstrap-pagination';

//Import styles
import './Home.scss'

// Import products
import Products from '../../assets/Products';

// Import components
import PorductCart from './ProductCart/ProductCart';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Products,
      currentPage: 1,
      currentProducts: [0, 6]
    };
    this.pageSize = 6;
    this.pagesCount = Math.ceil(this.products / this.pageSize);
  }

  handleSelected(index) {
    let from = (index - 1) * this.pageSize;
    let to = from + this.pageSize;
    this.setState({
      currentPage: index,
      currentProducts: [from, to]
    });
    console.log(this.state.currentPage)
  }

  changeCategory(event) {
    const chosencategory = event.target.dataset.order;
    const filtered = chosencategory !== "All"
      ? Products.filter(item => item.category === chosencategory)
      : Products
    this.setState({ products: filtered })
    this.handleSelected(1);
  }

  render() {
    return (
      <div className="home d-flex flex-md-row flex-column">
        <div className="col-md-4 col-12 justify-content-center">
          <ul className="d-flex flex-column  mt-2">
            <p>Kategorie:</p>
            <li
              className="nav-item"
              data-prop='category'
              data-order='All'
              onClick={event => this.changeCategory(event)}>
              Wszystkie
                        </li>
            <li
              className="nav-item"
              data-prop='category'
              data-order='Kolczyki'
              onClick={event => this.changeCategory(event)}>
              Kolczyki
                        </li>
            <li
              className="nav-item"
              data-prop='category'
              data-order='Pierścionki'
              onClick={event => this.changeCategory(event)}>
              Pierścionki
                        </li>
            <li
              className="nav-item"
              data-prop='category'
              data-order='Bransoletki'
              onClick={event => this.changeCategory(event)}>
              Bransoletki
                        </li>
            <li
              className="nav-item"
              data-prop='category'
              data-order='Broszki'
              onClick={event => this.changeCategory(event)}>
              Broszki
                        </li>
          </ul>
        </div>
        <div className="col-md-8 col-12 d-flex flex-wrap justify-content-center">
          {this
            .state
            .products
            .slice(this.state.currentProducts[0], this.state.currentProducts[1])
            .map((product, i) => {
              return (
                <div className="p-2 col-md-6 col-12" key={i}>
                  <PorductCart product={product} />
                </div>
              );
            })}
          <div className="w-100 d-flex justify-content-center mt-auto">
            {this.state.products.length > this.pageSize &&
            <PaginationComponent
              totalItems={this.state.products.length}
              pageSize={this.pageSize}
              onSelect={this
                .handleSelected
                .bind(this)}
              activePage={this.state.currentPage}
            />}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;