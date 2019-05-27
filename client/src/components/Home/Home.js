import React, { Component } from 'react';
import PaginationComponent from 'react-reactstrap-pagination';

//Import styles
import './Home.scss';

// Import products
import Products from '../../assets/Products';

// Import components
import PorductList from './ProductsList/ProductList';
import LeftMenu from './LeftMenu/LeftMenu';
import DropDownMenu from './DropDownMenu/DropDownMenu';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      width: window.innerWidth,
      products: Products,
      currentPage: 1,
      currentProducts: [0, 6]
    };
    this.pageSize = 6;
    this.pagesCount = Math.ceil(this.products / this.pageSize);
  }

  componentWillMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    this.setState({ isMobile: this.state.width <= 767 })
  };

  handleSelected(index) {
    let from = (index - 1) * this.pageSize;
    let to = from + this.pageSize;
    this.setState({
      currentPage: index,
      currentProducts: [from, to]
    });
    console.log(this.state.currentPage);
  }

  changeCategory(event) {
    const chosencategory = event.target.dataset.order;
    const filtered =
      chosencategory !== 'All'
        ? Products.filter(item => item.category === chosencategory)
        : Products;
    this.setState({ products: filtered });
    this.handleSelected(1);
  }

  render() {
    return (
      <div className="home d-flex flex-md-row flex-column">
        <div className="col-md-4 col-12 justify-content-center">
          {!this.state.isMobile && (
            <LeftMenu
              categories={[...new Set(Products.map(element => element.category))]}
              onChangeCategory={event => this.changeCategory(event)}
            />)}
            {this.state.isMobile && (
            <DropDownMenu
              categories={[...new Set(Products.map(element => element.category))]}
              onChangeCategory={event => this.changeCategory(event)}
            />)}
        </div>
        <div className="product-list col-md-8 col-12 ">
          <PorductList
            products={this.state.products.slice(
              this.state.currentProducts[0],
              this.state.currentProducts[1]
            )}
          />
          <div className="w-100 d-flex justify-content-center mt-auto">
            {this.state.products.length > this.pageSize && (
              <PaginationComponent
                totalItems={this.state.products.length}
                pageSize={this.pageSize}
                onSelect={this.handleSelected.bind(this)}
                activePage={this.state.currentPage}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
