import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeroCard from '../hero-card/HeroCard';
import './HeroesList.css';

const HeroesList = (props) => {
	const navigate = useNavigate();
	const handleButtonClick = () => navigate('/add-hero');

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
			{props.heroes.map((hero) => (
				<HeroCard key={hero.id} hero={hero}></HeroCard>
			))}
		</div>
	);
};

export default HeroesList;
