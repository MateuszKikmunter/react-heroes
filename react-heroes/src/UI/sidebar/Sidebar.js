import React, { useEffect } from 'react';
import halfmoon from 'halfmoon';

import eventBus from '../../services/EventBus';

const Sidebar = () => {
	useEffect(() => halfmoon.onDOMContentLoaded(),
		[halfmoon]);

	useEffect(() => {
		eventBus.on('toggle-sidebar', () => {
			halfmoon.toggleSidebar();
			console.log('event received');
		});
		return () => eventBus.remove('toggle-sidebar');
	});

	return (
		<div className="page-wrapper with-sidebar">
			<div className="sidebar">
				<div className="sidebar-menu">
					<h5 className="sidebar-title">General</h5>
					<div className="sidebar-divider"></div>
					<a href="#" className="sidebar-link sidebar-link-with-icon">
						<span className="sidebar-icon bg-transparent justify-content-start mr-0">
							<i
								className="fa fa-calculator"
								aria-hidden="true"
							></i>
						</span>
						Calculator
					</a>
					<a href="#" className="sidebar-link sidebar-link-with-icon">
						<span className="sidebar-icon bg-transparent justify-content-start mr-0">
							<i
								className="fa fa-newspaper-o"
								aria-hidden="true"
							></i>
						</span>
						News reader
					</a>
					<br />
					<h5 className="sidebar-title">Productivity</h5>
					<div className="sidebar-divider"></div>
					<a href="#" className="sidebar-link sidebar-link-with-icon">
						<span className="sidebar-icon bg-primary text-white rounded-circle">
							<i
								className="fa fa-file-word-o"
								aria-hidden="true"
							></i>
						</span>
						Docs
					</a>
					<a href="#" className="sidebar-link sidebar-link-with-icon">
						<span className="sidebar-icon bg-success text-dark rounded-circle">
							<i
								className="fa fa-file-excel-o"
								aria-hidden="true"
							></i>
						</span>
						Sheets
					</a>
					<a href="#" className="sidebar-link sidebar-link-with-icon">
						<span className="sidebar-icon bg-secondary text-dark rounded-circle">
							<i
								className="fa fa-envelope-o"
								aria-hidden="true"
							></i>
						</span>
						Email
					</a>
					<a href="#" className="sidebar-link sidebar-link-with-icon">
						<span className="sidebar-icon bg-danger text-white rounded-circle">
							<i
								className="fa fa-file-powerpoint-o"
								aria-hidden="true"
							></i>
						</span>
						Slides
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
