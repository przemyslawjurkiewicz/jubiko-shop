import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getOrdersByUserId} from '../../actions/orderActions';
import loader from '../../assets/images/oval.svg';

//Import styles
import './UserAccount.scss';

// Import components
import UserOrdersList from './UserOrdersList/UserOrdersList';

class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getOrdersByUserId(this.props.auth.user.id);
  }

  render() {
    const {user} = this.props.auth;
    return (
      <div className='user-account col-sm-12 d-flex flex-nowrap flex-column align-items-center justify-content-center'>
        <h4 className='align-self-start'>Twóje konto:</h4>
        {this.props.auth.isAuthenticated && (
          <div className='d-flex col-sm-12 flex-nowrap flex-column align-items-center justify-content-center'>
            <p className='summary'>Twój adres:</p>
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
            <p className='summary'>Twóje zamówienia:</p>
            {this.props.loading && (
              <div className='product d-flex align-items-center justify-content-center'>
                <img src={loader} alt='loader' />
              </div>
            )}
            {!this.props.loading && this.props.orders.length > 0 && (
              <div className='product d-flex align-items-center justify-content-center'>
                <UserOrdersList orders={this.props.orders} />
              </div>
            )}
            {!this.props.loading && this.props.orders.length === 0 && (
              <div className='product d-flex align-items-center justify-content-center'>
               <p>Brak zamówień.</p>
              </div>
            )}
          </div>
        )}

        {!this.props.auth.isAuthenticated && (
          <div className='user-account d-flex flex-nowrap flex-column align-items-center justify-content-center'>
            <p>Prosimy założyć konto lub się zalogować</p>
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
  auth: state.auth,
  orders: state.orders.orders,
  loading: state.products.loading
});

const mapDispatchToProps = {
  getOrdersByUserId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAccount);
