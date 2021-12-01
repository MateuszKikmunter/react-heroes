import React from 'react';

import './App.css';
import Sidebar from './UI/sidebar/Sidebar';
import Navbar from './UI/navbar/Navbar';

function App() {
	return (
		<>
			<div className="page-wrapper with-sidebar with-navbar">
				<Navbar></Navbar>
				<Sidebar></Sidebar>
				<div className="content-wrapper">
					{/* {content goes here} */}
				</div>
			</div>
		</>
	);
}

export default App;
