import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { heroService } from './services/HttpHeroService';
import eventBus from './services/EventBus';

import './App.css';
import Sidebar from './UI/sidebar/Sidebar';
import Navbar from './UI/navbar/Navbar';
import HeroesList from './heroes/heroes-list/HeroesList';
import About from './components/about/About';
import HeroForm from './heroes/hero-form/HeroForm';

function App() {
	const [heroes, setHeroes] = useState([]);
	const fetchHeroes = async () => {
		const result = await heroService.getHeroes();
		setHeroes([...result.data]);
	};

	useEffect(async () => {
		await fetchHeroes();
	}, []);

	useEffect(() => {
		eventBus.on('refresh-data', async () => await fetchHeroes());
		return () => eventBus.remove('refresh-data');
	}, []);

	return (
		<BrowserRouter>
			<div className="page-wrapper with-sidebar with-navbar">
				<Navbar></Navbar>
				<Sidebar></Sidebar>
				<div className="content-wrapper">
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route
								path="/"
								element={<HeroesList heroes={heroes} />}
							></Route>
							<Route
								path="add-hero"
								element={<HeroForm />}
							></Route>
							<Route
								path="edit-hero/:id"
								element={<HeroForm />}
							></Route>
							<Route path="about" element={<About />} />
						</Routes>
					</Suspense>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
