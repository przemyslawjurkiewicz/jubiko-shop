import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Import styles
import './Footer.scss'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="d-flex flex-lg-row flex-column-reverse">
                <div className="col-lg-4 text-center col-sm-12">
                    <p>All right reserved</p>
                </div>
                <div className="col-lg-8 d-flex justify-content-center justify-content-lg-end col-sm-12">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink to="/faq" activeClassName="active" className="nav-link" exact={true}>FAQ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/regulamin" activeClassName="active" className="nav-link" exact={true} >Regulamin</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/kontakt" activeClassName="active" className="nav-link" exact={true}>Kontakt</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
