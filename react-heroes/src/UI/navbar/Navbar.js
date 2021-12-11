import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import halfmoon, { readCookie } from 'halfmoon';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
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
			<NavLink to="/" className="navbar-brand">
				<img src={logo} alt="ReactJS logo" />
				React-Heroes
			</NavLink>
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
