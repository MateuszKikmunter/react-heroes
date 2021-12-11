import React from 'react';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './HeroCard.css';

const HeroCard = (props) => {

    //TODO: add action handlers for button
    return (
        <div className="card w-half">
            <h2 className="card-title border-bottom">🦸🏼 {props.hero.name}</h2>
            <div className="text-muted">
                <p>{props.hero.description}</p>
            </div>
            <div
                className="btn-group"
                role="group"
                aria-label="hero actions button group"
            >
                <button className="btn" type="button">
                    <FontAwesomeIcon icon={faPen} className="edit-btn-icon" />
                    {' '}Edit
                </button>
                <button className="btn" type="button">
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="delete-btn-icon"
                    />
                    {' '}Delete
                </button>
            </div>
        </div>
    );
};

export default HeroCard;
