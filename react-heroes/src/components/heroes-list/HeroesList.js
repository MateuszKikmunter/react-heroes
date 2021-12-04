import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';

import HeroCard from '../hero-card/HeroCard';
import './HeroesList.css';

const HeroesList = () => {

    const fakeHero = {
        id: nanoid(),
        name: 'Matt the Destroyer',
        description: 'Necromancer with a great army of the dead'
    };

    return (
        <div className="container">
            <div className="content">
                <h1 className="content-title font-size-22">
                    Heroes <button
                        className="btn btn-sm btn-action"
                        type="button"
                    >
                        <FontAwesomeIcon icon={faPlus} className="add-hero-btn" />
                    </button>
                </h1>
            </div>
            <HeroCard hero={fakeHero} />
        </div>
    );
};

export default HeroesList;