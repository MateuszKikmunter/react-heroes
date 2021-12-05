import React, { useEffect, useState } from 'react';

import './App.css';
import Sidebar from './UI/sidebar/Sidebar';
import Navbar from './UI/navbar/Navbar';
import HeroesList from './components/heroes-list/HeroesList';

import { HeroService } from './services/HttpHeroService';

function App() {
	const [heroes, setHeroes] = useState([]);
	useEffect(async () => {
		const result = await HeroService.getHeroes();
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
