import React from "react";
import { useNavigate } from 'react-router-dom';

import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './HeroForm.css';

const HeroForm = () => {
    const navigate = useNavigate();
    const handleCancelButtonClick = () => navigate('/');
    return (
        <div className="card w-half">
            <form>
                <h2 className="card-title border-bottom">🦸🏼 New Hero</h2>
                <div className="form-group">
                    <label htmlFor="hero-name" className="required text-muted">Name</label>
                    <input type="text" className="form-control" id="hero-name" placeholder="Your hero name." required="required" />
                </div>
                <div className="form-group">
                    <label htmlFor="hero-description" className="required text-muted">Description</label>
                    <textarea className="form-control resize-vertical" id="hero-description" placeholder="Write a short description about this hero." required="required"></textarea>
                </div>
            </form>
            <button className="btn mr-5 mb-5" type="submit">
                <FontAwesomeIcon icon={faCheck} className="submit-btn-icon" />{' '}Submit
            </button>
            <button className="btn" type="button" onClick={handleCancelButtonClick}>
                <FontAwesomeIcon icon={faBan} className="cancel-btn-icon" />{' '}Cancel
            </button>
        </div>
    );
};

export default HeroForm;