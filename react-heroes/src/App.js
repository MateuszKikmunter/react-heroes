import React from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import Sidebar from './UI/sidebar/Sidebar';
import Navbar from './UI/navbar/Navbar';
import HeroesList from './components/heroes-list/HeroesList';

function App() {
	//TODO: fetch heroes from the backed
	const fakeHeroes = [
		{
			id: nanoid(),
			name: 'Volwerine',
			description:
				'A mutant who possesses animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, and three retractable claws in each hand.'
		},
		{
			id: nanoid(),
			name: 'Nightcrawler',
			description:
				'Nightcrawler is a member of a fictional subspecies of humanity known as mutants, who possess an X-gene that can cause possible physical mutations and in many cases grants some form of superhuman ability. Nightcrawler possesses superhuman agility, the ability to teleport, and adhesive hands and feet.'
		},
		{
			id: nanoid(),
			name: 'Mystique',
			description:
				'Her mutant power is the ability to absorb the memories, personality, and skills or powers of whomever she touches. To free the other members of the Brotherhood, Mystique concocts a plan involving Rogue absorbing the powers of Ms. Marvel and the Avengers.'
		}
	];

	return (
		<div className="page-wrapper with-sidebar with-navbar">
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<div className="content-wrapper">
				<HeroesList heroes={fakeHeroes}></HeroesList>
			</div>
		</div>
	);
}

export default App;
