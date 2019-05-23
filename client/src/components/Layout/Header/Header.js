import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import styles
import './Header.scss'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="d-flex">
                <div className="col-lg-4 col-sm-12 text-center">
                    <h1>Jubiko</h1>
                </div>
                <div className="col-lg-8 col-sm-12 d-flex justify-content-end">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <NavLink to="/" activeClassName="active" className="nav-link" exact={true}>Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/faq" activeClassName="active" className="nav-link" exact={true}>FAQ</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/regulamin" activeClassName="active" className="nav-link" exact={true} >Regulamin</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/kontakt" activeClassName="active" className="nav-link" exact={true}>Kontakt</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/koszyk" activeClassName="active" className="nav-link" exact={true} ><i><FontAwesomeIcon icon="shopping-bag" /></i></NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default Header;
