import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { heroService } from '../../services/HttpHeroService';

import HeroCard from '../hero-card/HeroCard';
import './HeroesList.css';

const HeroesList = () => {
	const [heroes, setHeroes] = useState([]);
	useEffect(async () => {
		const result = await heroService.getHeroes();
		setHeroes([...result.data]);
	}, []);

	//TODO: add hero form component for this handler
	const navigate = useNavigate();
	const handleButtonClick = (event) => {
		event.preventDefault();
		navigate('/add-hero');
	};

	return (
		<div className="container">
			<div className="content">
				<h1 className="content-title font-size-22">
					Heroes{' '}
					<button
						className="btn btn-sm btn-action"
						type="button"
						onClick={handleButtonClick}
					>
						<FontAwesomeIcon
							icon={faPlus}
							className="add-hero-btn"
						/>
					</button>
				</h1>
			</div>
			{heroes.map((hero) => (
				<HeroCard key={hero.id} hero={hero}></HeroCard>
			))}
		</div>
	);
};

export default HeroesList;
