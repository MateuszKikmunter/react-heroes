import React from 'react';
import { useNavigate } from 'react-router-dom';

import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { heroService } from '../../services/HttpHeroService';
import eventBus from '../../services/EventBus';

import './HeroCard.css';

const HeroCard = (props) => {
	const navigate = useNavigate();
	const handleEditButtonClick = () => {
		navigate(`/edit-hero/${props.hero.id}`);
	};
	const handleDeleteButtonClick = async () => {
		if (confirm('Are you sure?')) {
			await heroService.deleteHero(props.hero.id);
			eventBus.dispatch('refresh-data');
			navigate('/');
		}
	};
	return (
		<div className="card w-half">
			<h2 className="card-title border-bottom">🦸🏼 {props.hero.name}</h2>
			<div className="text-muted break-word">
				<p>{props.hero.description}</p>
			</div>
			<div
				className="btn-group"
				role="group"
				aria-label="hero actions button group"
			>
				<button
					className="btn"
					type="button"
					onClick={handleEditButtonClick}
				>
					<FontAwesomeIcon icon={faPen} className="edit-btn-icon" />{' '}
					Edit
				</button>
				<button
					className="btn"
					type="button"
					onClick={handleDeleteButtonClick}
				>
					<FontAwesomeIcon
						icon={faTrashAlt}
						className="delete-btn-icon"
					/>{' '}
					Delete
				</button>
			</div>
		</div>
	);
};

export default HeroCard;
