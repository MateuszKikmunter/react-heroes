import React, { useEffect } from "react";
import halfmoon from 'halfmoon';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import eventBus from "../../services/EventBus";

import logo from '../../logo.svg';

const Navbar = () => {
    useEffect(() => halfmoon.onDOMContentLoaded(),
        [halfmoon]);

    const handleButtonClck = () => eventBus.dispatch('toggle-sidebar');

    return (
        <div className="page-wrapper with-navbar">
            <nav className="navbar">
                <div className="navbar-content">
                    <button className="btn btn-action" type="button" onClick={handleButtonClck}>
                        <FontAwesomeIcon icon={faBars} />
                        <span className="sr-only">Toggle sidebar</span>
                    </button>
                </div>
                <a href="/" className="navbar-brand navbar-brand-link">
                    <img src={logo} alt="ReactJS logo" />
                    React-Heroes
                </a>
                <div className="navbar-content d-md-none ml-auto">
                    <div className="dropdown with-arrow">
                        <button className="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
                            Menu
                            <i aria-hidden="true"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1">
                            <a href="#" className="dropdown-item">Docs</a>
                            <a href="#" className="dropdown-item">Products</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="content-wrapper">
                ...
            </div>
        </div>
    );
};

export default Navbar;