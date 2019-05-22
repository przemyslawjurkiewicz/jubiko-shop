import  React, { Component }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

// Import components
import Layout from './Layout/Layout';
import Home from './Home/Home';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
