import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

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

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/product/:id'} component={Product} />
              <Route exact path={'/koszyk'} component={Cart} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}
