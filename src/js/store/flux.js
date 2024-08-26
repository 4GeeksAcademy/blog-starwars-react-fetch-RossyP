import { sync } from "remote-origin-url";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			uidCharacter : [],
			detailCharacter: [],
			urlCharacters: [],
			planets:[],
			uidPlanet:[],
			detailPlanet: [],
			urlPlanet: [],
			species:[],
			uidSpecie:[],
			detailSpecie: [],
		
		},
		actions: {

			obteniendoPersonajes: async () => {
				try{
					let response = await fetch("https://www.swapi.tech/api/people/")
					let data = await response.json()
					let uids = await data.results.map(result => result.uid);
					await setStore({characters: data.results, uidCharacter: uids})
					return
				}catch (error){
					console.log(error)
				}
			},

			detallePersonaje: async (id) => {
			
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					const data = await response.json()
					setStore({detailCharacter: data.result });
				} catch (error) {
					console.log(error);
				}
			},

			personajePorURL: async (url) => {
				try{
					const response = await fetch(url)
					const data = await response.json()
					setStore({urlCharacters: data.result})
				}catch (error){
					console.log(error)
				}
			},

			obteniendoPlanetas: async () => {
				const store = getStore();
				
				try{
					const response = await fetch("https://www.swapi.tech/api/planets/")
					const data = await response.json()
					const uids = await data.results.map((result) => result.uid)
					setStore({planets: data.results, uidPlanet: uids})
					console.log(store.planets)
					return
				}catch (error){
					console.log(error)
				}
			},


			detallePlanetas: async (id) => {

				try{
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					const data = await response.json()
					console.log(data);
					setStore({detailPlanet: data.result})
				}catch (error){
					console.log(error)
				}
			},

			planetasPorURL: async (url) => {
				try{
					const response = await fetch(url)
					const data = await response.json()
					setStore({urlPlanet: data.result}) 
				}catch (error) {
					console.log(error)
				}
			},

			obteniendoSpecies: async () => {
				try{
					const response = await fetch("https://www.swapi.tech/api/species")
					const data = await response.json()
					const uids = await data.results.map((result) => result.id)
					setStore({species: data.results, uidSpecie: uids})
				}catch (error){
					console.log(error)
				}
			},
			
			detalleSpecies: async (id) => {
				try{
					const response = await fetch(`https://www.swapi.tech/api/species/${id}`)
					const data = await response.json()
					setStore({detailSpecie: data.result})
				}catch (error) {
					console.log(error)
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
