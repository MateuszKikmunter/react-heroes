import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Sidebar from './UI/sidebar/Sidebar';
import Navbar from './UI/navbar/Navbar';
import HeroesList from './heroes/heroes-list/HeroesList';
import About from './components/about/About';

function App() {
	return (
		<BrowserRouter>
			<div className="page-wrapper with-sidebar with-navbar">
				<Navbar></Navbar>
				<Sidebar></Sidebar>
				<div className="content-wrapper">
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path="/" element={<HeroesList />}></Route>
							<Route path="about" element={<About />} />
						</Routes>
					</Suspense>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
