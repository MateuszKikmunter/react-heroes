import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Sidebar from './UI/sidebar/Sidebar';
import Navbar from './UI/navbar/Navbar';
import HeroesList from './components/heroes-list/HeroesList';

function App() {
	const apiURL = 'http://localhost:4000/heroes';
	const [heroes, setHeroes] = useState([]);
	useEffect(async () => {
		const result = await axios.get(apiURL);
		setHeroes([...result.data]);
	}, []);

	return (
		<div className="page-wrapper with-sidebar with-navbar">
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<div className="content-wrapper">
				<HeroesList heroes={heroes}></HeroesList>
			</div>
		</div>
	);
}

export default App;
