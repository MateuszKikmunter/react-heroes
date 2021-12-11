import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import eventBus from "../../services/EventBus";
import { heroService } from "../../services/HttpHeroService";

import './HeroForm.css';

//TODO: Fix when edit mode => Warning: A component is changing an uncontrolled input to be controlled...
const HeroForm = () => {
    const [heroName, setHeroName] = useState('New Hero');
    const [hero, setHero] = useState();
    const navigate = useNavigate();
    const params = useParams();
    const nameRef = useRef();
    const descriptionRef = useRef();

    useEffect(async () => {
        const heroId = params.id;
        if (heroId) {
            const result = await heroService.getHero(heroId);
            console.log(result.data);
            setHero({ ...result.data });
            setHeroName(result.data.name);
        }
    }, []);

    const handleCancelButtonClick = () => navigate('/');

    const handleNameChange = (e) => {
        setHeroName(e.target.value);
    };

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        const hero = {
            name: nameRef.current.value,
            description: descriptionRef.current.value
        };

        await heroService.createHero(hero);
        eventBus.dispatch('refresh-data');
        navigate('/');
    };

    return (
        <div className="card w-half">
            <form onSubmit={handleFormSubmission} autoComplete='off'>
                <h2 className="card-title border-bottom">🦸🏼 {hero?.name ?? heroName}</h2>
                <div className="form-group">
                    <label htmlFor="hero-name" className="required text-muted">Name</label>
                    <input type="text" value={hero?.name} className="form-control" id="hero-name" placeholder="Your hero name." required="required" onChange={handleNameChange} ref={nameRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="hero-description" className="required text-muted">Description</label>
                    <textarea className="form-control resize-vertical" value={hero?.description} id="hero-description" placeholder="Write a short description about this hero." required="required" ref={descriptionRef}></textarea>
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