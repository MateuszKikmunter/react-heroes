import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import eventBus from "../../services/EventBus";
import { heroService } from "../../services/HttpHeroService";

import './HeroForm.css';

const HeroForm = () => {
    const [heroName, setHeroName] = useState('');
    const [heroDescription, setheroDescription] = useState();
    const navigate = useNavigate();
    const params = useParams();
    const nameRef = useRef();
    const descriptionRef = useRef();

    useEffect(async () => {
        if (params.id) {
            const result = await heroService.getHero(params.id);
            const { name, description } = result.data;
            setHeroName(name);
            setheroDescription(description);
        }
    }, []);

    const handleCancelButtonClick = () => navigate('/');
    const handleNameChange = (e) => setHeroName(e.target.value);
    const handleDescriptionChange = (e) => setheroDescription(e.target.value);

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        const hero = {
            name: nameRef.current.value,
            description: descriptionRef.current.value
        };

        params.id
            ? await heroService.updateHero({ id: params.id, ...hero })
            : await heroService.createHero({ ...hero });

        eventBus.dispatch('refresh-data');
        navigate('/');
    };

    return (
        <div className="card w-half">
            <form onSubmit={handleFormSubmission} autoComplete='off'>
                <h2 className="card-title border-bottom">🦸🏼 {heroName}</h2>
                <div className="form-group">
                    <label htmlFor="hero-name" className="required text-muted">Name</label>
                    <input type="text" className="form-control" id="hero-name" placeholder="Your hero name." required="required" value={heroName} onChange={handleNameChange} ref={nameRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="hero-description" className="required text-muted">Description</label>
                    <textarea className="form-control resize-vertical" value={heroDescription} id="hero-description" placeholder="Write a short description about this hero." required="required" onChange={handleDescriptionChange} ref={descriptionRef}></textarea>
                </div>
                <button className="btn mr-5 mb-5" type="submit">
                    <FontAwesomeIcon icon={faCheck} className="submit-btn-icon" />{' '}Submit
                </button>
                <button className="btn" type="button" onClick={handleCancelButtonClick}>
                    <FontAwesomeIcon icon={faBan} className="cancel-btn-icon" />{' '}Cancel
                </button>
            </form>
        </div>
    );
};

export default HeroForm;