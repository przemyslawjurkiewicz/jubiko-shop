import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import styles
import './Header.scss'

// Import logo
import logo from '../../../assets/images/logo.jpg'
console.log(logo);


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }


    render() {
        return (
            <div className="d-flex">
                <div className="col-sm-4 ">
                    <img src={logo} alt="Jubiko" className="float-left" />
                </div>
                <div className="col-sm-8 d-flex justify-content-end">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <button className="navbar-toggler pull-right" onClick={state => this.setState({ collapsed: this.state.collapsed ? false : true })}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={this.state.collapsed ? "collapse navbar-collapse bg-light show " : "collapse navbar-collapse"}>
                            <ul className="nav nav-pills flex-column flex-md-row align-items-center">
                                <li className="nav-item">
                                    <NavLink to="/" activeClassName="active" className="nav-link" exact={true}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/faq" activeClassName="active" className="nav-link" exact={true}>FAQ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/regulamin" activeClassName="active" className="nav-link" exact={true} >Regulamin</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/kontakt" activeClassName="active" className="nav-link" exact={true}>Kontakt</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/koszyk" activeClassName="active" className="nav-link" exact={true} ><i><FontAwesomeIcon icon="shopping-bag" /></i></NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
