import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';
import store from './store';
//import { spring, AnimatedSwitch } from 'react-router-transition';

// Import bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import FontAwsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

// Import components
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import Order from './Order/Order';
import Register from './Auth/Register';
import Login from './Auth/Login';

// Icons Liblary
library.add(faShoppingBag);

// Wrap the spring helper to use a bouncy config
//const bounce = val => {
 // return spring(val, {
 //   stiffnes: 530,
  //  dumping: 55
 // });
//};

// child matches will..
//const bounceTransition = {
 // atEnter: {
 //   opacity: 1
//  },

//  atLeave: {
//    opacity: bounce(0)
// },

//  atActive: {
//    opacity: bounce(1)
//  }
//};

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = './login';
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch
              //atEnter={bounceTransition.atEnter}
              //atLeave={bounceTransition.atLeave}
             // atActive={bounceTransition.atActive}
             // className="witch-wrapper"
            >
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/product/:id'} component={Product} />
              <Route exact path={'/koszyk'} component={Cart} />
              <Route exact path={'/zamowienie'} component={Order} />
              <Route exact path={'/register'} component={Register} />
              <Route exact path={'/login'} component={Login} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}
