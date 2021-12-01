import React, { useEffect } from "react";
import halfmoon from 'halfmoon';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../../logo.svg';

const Navbar = () => {
    useEffect(() => halfmoon.onDOMContentLoaded(),
        [halfmoon]);

    const handleButtonClck = () => {
        halfmoon.toggleSidebar();
    };

    return (
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
        </nav>
    );
};

export default Navbar;