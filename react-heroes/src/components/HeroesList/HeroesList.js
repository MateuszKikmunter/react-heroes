import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeroCard from '../HeroCard/HeroCard';

const HeroesList = () => {

    //const [heroes, setHeroes] = useState([]);

    return (
        <div className="container">
            <div className="content">
                <h1 className="content-title font-size-22">
                    Heroes <button
                        className="btn btn-sm btn-action"
                        type="button"
                    >
                        <FontAwesomeIcon icon={faPlus} style={{ color: '#29ab43' }} />
                    </button>
                </h1>
            </div>
            <HeroCard />
        </div>
    );
};

export default HeroesList;