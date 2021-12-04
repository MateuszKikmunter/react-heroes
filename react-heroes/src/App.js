import React from 'react';

import './App.css';
import Sidebar from './UI/sidebar/Sidebar';
import Navbar from './UI/navbar/Navbar';
import HeroesList from './components/heroes-list/HeroesList';

function App() {
	return (
		<div className="page-wrapper with-sidebar with-navbar">
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<div className="content-wrapper">
				<HeroesList heroes={[]}></HeroesList>
			</div>
		</div>
	);
}

export default App;
