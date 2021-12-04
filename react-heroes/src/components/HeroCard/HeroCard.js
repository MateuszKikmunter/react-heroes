import React from "react";
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './HeroCard.css';

const HeroCard = () => {
    return (
        <div className="card w-half">
            <h2 className="card-title border-bottom">
                🦸🏼 Hero Name
            </h2>
            <div className="text-muted">
                <p>description</p>
            </div>
            <div className="btn-group" role="group" aria-label="Another button group">
                <button className="btn" type="button"><FontAwesomeIcon icon={faPen} style={{ color: 'orange' }} /> Edit</button>
                <button className="btn" type="button"> <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'red' }} /> Delete</button>
            </div>
        </div>
    );

};

export default HeroCard;