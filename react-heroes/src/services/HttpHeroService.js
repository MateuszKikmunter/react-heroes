import axios from 'axios';
import { nanoid } from 'nanoid';

const apiURL = 'http://localhost:4000/heroes';

export const heroService = {
	getHeroes: async () => {
		return axios.get(apiURL);
	},
	getHero: async (id) => {
		return axios.get(`${apiURL}/${id}`);
	},
	createHero: async (hero) => {
		return axios.post(apiURL, { id: nanoid(), ...hero });
	},
	updateHero: async (hero) => {
		return axios.put(`${apiURL}/${hero.id}`, hero);
	},
	deleteHero: async (id) => {
		return axios.delete(`${apiURL}/${id}`);
	}
};
