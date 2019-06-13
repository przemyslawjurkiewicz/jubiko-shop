import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import classnames from 'classnames';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/zamowienie'); // push user to order when  login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to order
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/zamowienie');
    }
  }

  onChange = e => {
    this.setState({[e.target.id]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const {errors} = this.state;
    return (
      <div className='container'>
        <div className='row flex-column align-content-center justify-content-center'>
          <div>
            <h4>
              <b>Zaloguj się</b>
            </h4>
            <p>
              Nie posiadasz konta? <Link to='/register'>Zarejestruj się</Link>
            </p>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className='col-sm-12 p-2'>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id='email'
                type='email'
                placeholder='Email'
                className={classnames('form-control', {
                  'is-invalid': errors.email || errors.emailnotfound
                })}
              />
              <small className='form-text text-danger'>
                {errors.email}
                {errors.emailnotfound}
              </small>
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
                  'is-invalid': errors.password || errors.passwordincorrect
                })}
              />
              <small className='form-text text-danger'>
                {errors.password}
                {errors.passwordincorrect}
              </small>
            </div>
            <div className='col s12' style={{paddingLeft: '11.250px'}}>
              <button ttype='submit' className='btn btn-primary'>
                Logowanie
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {loginUser}
)(Login);
