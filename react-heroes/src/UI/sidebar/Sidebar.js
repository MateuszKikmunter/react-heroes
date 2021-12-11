import React from 'react';
import { NavLink } from 'react-router-dom';
import { faLightbulb, faBolt, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar-menu">
				<h5 className="sidebar-title">Navigation</h5>
				<div className="sidebar-divider"></div>
				<NavLink to="/" className="sidebar-link sidebar-link-with-icon">
					<span className="sidebar-icon bg-danger text-white rounded-circle">
						<FontAwesomeIcon icon={faBolt} />
					</span>
					Heroes
				</NavLink>
				<NavLink to="/about" className="sidebar-link sidebar-link-with-icon">
					<span className="sidebar-icon bg-primary text-white rounded-circle">
						<FontAwesomeIcon icon={faLightbulb} />
					</span>
					About
				</NavLink>
				<a
					href="https://github.com/MateuszKikmunter/react-heroes/tree/main/react-heroes"
					target="_blank"
					rel="noopener noreferrer"
					className="sidebar-link sidebar-link-with-icon"
				>
					<span className="sidebar-icon bg-success text-dark rounded-circle">
						<FontAwesomeIcon icon={faCode} />
					</span>
					Source Code
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
