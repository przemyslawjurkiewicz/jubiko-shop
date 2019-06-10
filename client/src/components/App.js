import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { spring, AnimatedSwitch } from 'react-router-transition';

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

// Icons Liblary
library.add(faShoppingBag);

// Wrap the spring helper to use a bouncy config
const bounce = val => {
  return spring(val, {
    stiffnes: 120,
    dumping: 45
  });
};

// child matches will..
const bounceTransition = {
  atEnter: {
    opacity: 0.8
  },

  atLeave: {
    opacity: bounce(0)
  },

  atActive: {
    opacity: bounce(1)
  }
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              className="witch-wrapper"
            >
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/product/:id'} component={Product} />
              <Route exact path={'/koszyk'} component={Cart} />
            </AnimatedSwitch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}
