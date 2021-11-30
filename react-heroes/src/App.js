import React from 'react';

import './App.css';
import Sidebar from './UI/sidebar/Sidebar';
import Navbar from './UI/navbar/Navbar';

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
		</div>
	);
}

export default App;
