import React, {Component} from 'react';
import PaginationComponent from 'react-reactstrap-pagination';
import {connect} from 'react-redux';
import {
  getAllProducts,
  onChangeCategory,
  onChangeSort
} from '../../actions/productsActions';
import {addToCart} from '../../actions/cartActions';
import loader from '../../assets/images/oval.svg';

//Import styles
import './Home.scss';

// Import components
import PorductList from './ProductsList/ProductList';
import LeftMenu from './LeftMenu/LeftMenu';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import TopMenu from './TopMenu/TopMenu';

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
    this.props.getAllProducts();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
    this.setState({isMobile: this.state.width <= 767});
  };

  handleSelected(index) {
    let from = (index - 1) * this.pageSize;
    let to = from + this.pageSize;
    this.setState({
      currentPage: index,
      currentProducts: [from, to]
    });
  }

  onChangeCategory(event) {
    const chosencategory = event.target.dataset.order;
    this.props.onChangeCategory(this.props.allProducts, chosencategory);
    this.handleSelected(1);
  }

  onAddToCartClic(product, event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.addToCart(product);
  }

  onChangeSort(event) {
    this.props.onChangeSort(event);
  }

  render() {
    return (
      <div className='home d-flex flex-md-row flex-column'>
        <div className='col-md-4 col-12 justify-content-center'>
          {!this.state.isMobile && (
            <LeftMenu
              categories={[
                ...new Set(
                  this.props.allProducts.map(element => element.category)
                )
              ]}
              onChangeCategory={event => this.onChangeCategory(event)}
            />
          )}
          {this.state.isMobile && (
            <DropDownMenu
              categories={[
                ...new Set(
                  this.props.allProducts.map(element => element.category)
                )
              ]}
              onChangeCategory={event => this.onChangeCategory(event)}
            />
          )}
        </div>
        <div className='product-list col-md-8 col-12 '>
          {this.props.loading && (
            <div className='d-flex justify-content-center align-items-center'>
              <img src={loader} alt='loader' />
            </div>
          )}
          {!this.props.loading && (
            <div>
              <TopMenu onChangeSort={event => this.onChangeSort(event)} />
              <PorductList
                products={this.props.products.slice(
                  this.state.currentProducts[0],
                  this.state.currentProducts[1]
                )}
                onAddToCartClic={(product, event) =>
                  this.onAddToCartClic(product, event)
                }
              />
              <div className='w-100 d-flex justify-content-center mt-auto'>
                {this.props.products.length > this.pageSize && (
                  <PaginationComponent
                    totalItems={this.props.products.length}
                    pageSize={this.pageSize}
                    onSelect={(product, e) => this.handleSelected(product, e)}
                    activePage={this.state.currentPage}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
  allProducts: state.products.allProducts
});

const mapDispatchToProps = {
  getAllProducts,
  onChangeCategory,
  addToCart,
  onChangeSort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
