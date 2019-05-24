import React, { Component } from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'

class Layout extends Component {
  render() {
    return (
      <div className="container pt-3">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
