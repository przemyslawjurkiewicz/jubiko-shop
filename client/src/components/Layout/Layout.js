import React, { Component } from 'react';
import Header from './Header/Header'

class Layout extends Component {
  render() {
    return (
      <div className="container pt-3">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
