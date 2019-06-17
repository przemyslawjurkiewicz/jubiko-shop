import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import classnames from 'classnames';
import uuid from 'uuid';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      id: uuid(),
      name: '',
      email: '',
      password: '',
      password2: '',
      city: '',
      street: '',
      zip: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to back
    if (this.props.auth.isAuthenticated) {
      this.props.history.goBack();
    }
  }

  onChange = e => {
    this.setState({[e.target.id]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      city: this.state.city,
      street: this.state.street,
      zip: this.state.zip
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const {errors} = this.state;
    return (
      <div className='container'>
        <div className='row flex-column align-content-center justify-content-center'>
          <div>
            <h4>
              <b>Załóż konto</b>
            </h4>
            <p>
              Posiadasz już konto? <Link to='/login'>Zaloguj się</Link>
            </p>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className='col-sm-12 p-2'>
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id='name'
                type='text'
                placeholder='Imię i nazwisko'
                className={classnames('form-control', {
                  'is-invalid': errors.name
                })}
              />
              <small className='form-text text-danger'>{errors.name}</small>
            </div>
            <div className='col-sm-12 p-2'>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id='email'
                type='email'
                placeholder='Email'
                className={classnames('form-control', {
                  'is-invalid': errors.email
                })}
              />
              <small className='form-text text-danger'>{errors.email}</small>
            </div>
            <div className='col-sm-12 p-2'>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id='password'
                type='password'
                placeholder='Hasło'
                className={classnames('form-control', {
                  'is-invalid': errors.password
                })}
              />
              <small className='form-text text-danger'>{errors.password}</small>
            </div>
            <div className='col-sm-12 p-2'>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id='password2'
                type='password'
                placeholder='Potwierdź hasło'
                className={classnames('form-control', {
                  'is-invalid': errors.password2
                })}
              />
              <small className='form-text text-danger'>
                {errors.password2}
              </small>
            </div>
            <div>
              <h4>
                <b>Adres wysyłki</b>
              </h4>
              <p>podaj adres do wysyłki:</p>
            </div>
            <div className='col-sm-12 p-2'>
              <input
                onChange={this.onChange}
                value={this.state.street}
                error={errors.street}
                id='street'
                type='text'
                placeholder='Podaj ulicę i numer domu'
                className={classnames('form-control', {
                  'is-invalid': errors.street
                })}
              />
              <small className='form-text text-danger'>{errors.street}</small>
            </div>
            <div className='form-row col-sm-12 p-2'>
              <div className='col-7'>
                <input
                  onChange={this.onChange}
                  value={this.state.city}
                  error={errors.city}
                  id='city'
                  type='text'
                  placeholder='Miasto'
                  className={classnames('form-control', {
                    'is-invalid': errors.city
                  })}
                />
                <small className='form-text text-danger'>{errors.city}</small>
              </div>
              <div className='col'>
                <input
                  onChange={this.onChange}
                  value={this.state.zip}
                  error={errors.zip}
                  id='zip'
                  type='text'
                  placeholder='Kod'
                  className={classnames('form-control', {
                    'is-invalid': errors.zip
                  })}
                />
                <small className='form-text text-danger'>{errors.zip}</small>
              </div>
            </div>
            <div>
              <button type='submit' className='btn btn-primary'>
                Zarejestruj
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  {registerUser}
)(withRouter(Register));
