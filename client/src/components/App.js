import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import FontAwsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

// Import components
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Product from './Product/Product';

// Icons Liblary
library.add(faShoppingBag);

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/product/:id'} component={Product} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
