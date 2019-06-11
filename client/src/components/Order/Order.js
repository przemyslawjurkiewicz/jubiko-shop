import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// Import style
import './Order.scss';

export class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {user} = this.props.auth;
    console.log(user);
    return (
      <div className='order col-sm-12 d-flex flex-nowrap flex-column align-items-center justify-content-center'>
        <h4>Twóje zamówienie:</h4>
        <p className='summary'>
          Razem:
          <span>
            {this.props.summary.toLocaleString('pl-PL', {
              minimumFractionDigits: 2
            })}
            zł
          </span>
        </p>
        <hr />
        {this.props.auth.isAuthenticated && (
          <div className='d-flex col-sm-12 flex-nowrap flex-column align-items-center justify-content-center'>
            <p className='summary'>Zostanie wysłane na adres:</p>
            <p className='summary'>
              <span>{user.name}</span>
            </p>
            <p className='summary'>
              Ulica:<span>{user.street}</span>
            </p>
            <p className='summary'>
              Miasto:
              <span>
                {user.zip}
                {user.city}
              </span>
            </p>
            <br />
            <p className='summary'>Dziękujemy.</p>
          </div>
        )}

        {!this.props.auth.isAuthenticated && (
          <div className='order d-flex flex-nowrap flex-column align-items-center justify-content-center'>
            <p>
              Aby kontynuować zamówienie prosimy założyć konto lub się zalogować
            </p>
            <div className='d-flex flex-row align-items-center justify-content-around '>
              <Link to='/register' className='btn btn-primary m-2'>
                Rejestracja
              </Link>
              <Link to='/login' className='btn btn-primary m-2'>
                Logowanie
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedToCart: state.cart.addedToCart,
  summary: state.cart.summary,
  auth: state.auth
});

export default connect(mapStateToProps)(Order);