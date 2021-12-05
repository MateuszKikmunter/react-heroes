import axios from 'axios';

const apiURL = 'http://localhost:4000/heroes';

export const HeroService = {
    getHeroes: async () => {
        return axios.get(apiURL);
    },
    getHero: async (id) => {
        return axios.get(`${apiURL}/${id}`);
    },
    createHero: async (hero) => {
        return axios.post(apiURL, hero);
    },
    updateHero: async (hero) => {
        return axios.put(`${apiURL}/${hero.id}`, hero);
    },
    deleteHero: async (id) => {
        return axios.delete(`${apiURL}/${id}`);
    }
};

