import React, { Component } from 'react';
import PaginationComponent from 'react-reactstrap-pagination';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productsActions';

//import axios from 'axios';
//Import styles
import './Home.scss';

// Import products
//import Products from '../../assets/Products';

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
      currentPage: 1,
      currentProducts: [0, 6]
    };
    this.pageSize = 6;
    this.pagesCount = Math.ceil(this.props.products / this.pageSize);
  }

  componentWillMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    this.setState({ isMobile: this.state.width <= 767 });
  };

  handleSelected(index) {
    let from = (index - 1) * this.pageSize;
    let to = from + this.pageSize;
    this.setState({
      currentPage: index,
      currentProducts: [from, to]
    });
  }

  changeCategory(event) {
    const chosencategory = event.target.dataset.order;
    const filtered =
      chosencategory !== 'All'
        ? this.props.products.filter(item => item.category === chosencategory)
        : this.props.products;
    this.setState({ products: filtered });
    this.handleSelected(1);
  }

  render() {
    console.log(this.props.products);
    return (
      <div className="home d-flex flex-md-row flex-column">
        <div className="col-md-4 col-12 justify-content-center">
          {!this.state.isMobile && (
            <LeftMenu
              categories={[
                ...new Set(this.props.products.map(element => element.category))
              ]}
              onChangeCategory={event => this.changeCategory(event)}
            />
          )}
          {this.state.isMobile && (
            <DropDownMenu
              categories={[
                ...new Set(this.props.products.map(element => element.category))
              ]}
              onChangeCategory={event => this.changeCategory(event)}
            />
          )}
        </div>
        <div className="product-list col-md-8 col-12 ">
          <PorductList
            products={this.props.products.slice(
              this.state.currentProducts[0],
              this.state.currentProducts[1]
            )}
          />
          <div className="w-100 d-flex justify-content-center mt-auto">
            {this.props.products.length > this.pageSize && (
              <PaginationComponent
                totalItems={this.props.products.length}
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

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, {getProducts})(Home);
