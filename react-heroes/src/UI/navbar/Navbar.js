import React, { useEffect, useState } from 'react';
import halfmoon, { readCookie } from 'halfmoon';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../logo.svg';

const Navbar = () => {
    const [themeIcon, setThemeIcon] = useState(faSun);

    useEffect(() => halfmoon.onDOMContentLoaded(), [halfmoon]);

    useEffect(() => {
        const cookieValue = readCookie('halfmoon_preferredMode');
        if (cookieValue === 'dark-mode') {
            setThemeIcon(faSun);
            halfmoon.toggleDarkMode();
        } else {
            setThemeIcon(faMoon);
        }
    }, [halfmoon]);

    const toggleSidebar = () => halfmoon.toggleSidebar();
    const toggleDarkMode = () => {
        themeIcon === faSun ? setThemeIcon(faMoon) : setThemeIcon(faSun);
        halfmoon.toggleDarkMode();
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <button
                    className="btn btn-action"
                    type="button"
                    onClick={toggleSidebar}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <a href="/" className="navbar-brand">
                <img src={logo} alt="ReactJS logo" />
                React-Heroes
            </a>
            <button
                className="btn btn-action ml-auto"
                type="button"
                onClick={toggleDarkMode}
            >
                <FontAwesomeIcon icon={themeIcon} />
            </button>
        </nav>
    );
};

export default Navbar;
