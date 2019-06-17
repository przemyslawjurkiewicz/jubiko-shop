import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
// Import styles
import './Header.scss';

// Import logo
import logo from '../../../assets/images/logo.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
  };

  calopseChange = () => {
    const isMobile = this.state.width <= 767;
    if (isMobile) {
      this.setState({collapsed: this.state.collapsed ? false : true});
    }
  };

  render() {
    return (
      <div className='d-flex header'>
        <div className='col-sm-4 '>
          <NavLink to='/' className='nav-link'>
            <img src={logo} alt='Jubiko Biżuteria Autorska' />
          </NavLink>
        </div>
        <div className='col-sm-8 d-flex justify-content-end'>
          <nav className='navbar-expand-md navbar-light'>
            <button
              className='navbar-toggler pull-right'
              onClick={this.calopseChange}
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className={
                this.state.collapsed
                  ? 'collapse navbar-collapse bg-light show '
                  : 'collapse navbar-collapse'
              }
            >
              <ul className='nav nav-pills flex-column flex-md-row align-items-center h-75 justify-content-around'>
                <li className='nav-item '>
                  <NavLink
                    to='/'
                    activeClassName='active'
                    className='nav-link'
                    onClick={this.calopseChange}
                    exact={true}
                  >
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='/faq'
                    activeClassName='active'
                    className='nav-link'
                    onClick={this.calopseChange}
                    exact={true}
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='/regulamin'
                    activeClassName='active'
                    className='nav-link'
                    onClick={this.calopseChange}
                    exact={true}
                  >
                    Regulamin
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='/kontakt'
                    activeClassName='active'
                    className='nav-link'
                    onClick={this.calopseChange}
                    exact={true}
                  >
                    Kontakt
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='/koszyk'
                    activeClassName='active'
                    className='nav-link cart-icon'
                    onClick={this.calopseChange}
                    exact={true}
                  >
                    <i className='cart-icon'>
                      <FontAwesomeIcon icon='shopping-bag' />
                      <p className='cart-items'>
                        {this.props.addedToCart.reduce((a, {quantity}) => {
                          return a + quantity;
                        }, 0)}
                      </p>
                    </i>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='/konto'
                    activeClassName='active'
                    className='nav-link cart-icon'
                    onClick={this.calopseChange}
                    exact={true}
                  >
                    <i className='cart-icon'>
                      <FontAwesomeIcon icon='user' />
                    </i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedToCart: state.cart.addedToCart
});
export default connect(mapStateToProps)(Header);
