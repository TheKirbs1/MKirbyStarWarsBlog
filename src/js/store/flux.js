const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			personDetails: {
				description: "",
				properties: {}
			},
			starships: [],
			starshipsDetails: {
				description: "",
				properties: {}
			},
			planets: [],
			PlanetDetails: {
				description: "",
				properties: {}
			},
			favorites: []
		},

		
		actions: {

		getPeople: async () => {
			const response = await fetch("https://www.swapi.tech/api/people/");
			if (!response.ok) {
				throw new Error(response.status, response.statusText);
			}
			const data= await response.json();
			setStore({people: data.results})
		},
		
		getPersonDetails: async (id) => {
			const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
			if (!response.ok) {
				throw new Error(`${response.status} - ${response.statusText}`);
			}
			const data = await response.json();

			const personalDetails = {
				description: data.result.description,
			 	properties: {...data.result.properties}
			}
		
			setStore({ personDetails: personalDetails });
		},
		
		getStarships: async () => {
			const response = await fetch("https://www.swapi.tech/api/starships/");
			if (!response.ok) {
				throw new Error(response.status, response.statusText);
			}
			const data= await response.json();
			setStore({starships: data.results})
		},

				
		getStarshipsDetails: async (id) => {
			const response = await fetch(`https://www.swapi.tech/api/starships/${id}`)
			if (!response.ok) {
				throw new Error(`${response.status} - ${response.statusText}`);
			}
			const data = await response.json();

			const updatedStarshipsDetails = {
				description: data.result.description,
			 	properties: {...data.result.properties}
			}
		
			setStore({ starshipsDetails: updatedStarshipsDetails });
		},

		getPlanets: async () => {
			const response = await fetch("https://www.swapi.tech/api/planets/");
			if (!response.ok) {
				throw new Error(response.status, response.statusText);
			}
			const data= await response.json();
			setStore({planets: data.results})
		},

		getPlanetDetails: async (id) => {
			const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
			if (!response.ok) {
				throw new Error(`${response.status} - ${response.statusText}`);
			}
			const data = await response.json();

			const updatedPlanetDetails = {
				description: data.result.description,
			 	properties: {...data.result.properties}
			}
		
			setStore({ planetDetails: updatedPlanetDetails });
		},
		
		AddFavorite: (favItem) => {
		const store = getStore();
		store.favorites.push(favItem);
		setStore(store)
		console.log(store.favorites)
		},
		deleteFavorite: (deletedItem) => {
			const store = getStore();
			const updatedFavorites = store.favorites.filter(item => item !== deletedItem);
			setStore({
				favorites: updatedFavorites,
			});
		},
		

		}
	};
};

export default getState;