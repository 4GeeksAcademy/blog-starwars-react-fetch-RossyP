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
			planets:[],
			uidPlanet:[],
			detailPlanet: [],
			urlPlanet: [],
			species:[],
			uidSpecie:[],

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
			// obtenerImagen: (id) => {
			// 	try{
			// 		const response = await fetch(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)
			// 		const data = await response.json()
			// 		setStore({images: data})
			// 	}catch (error){
			// 		console.log(error)
			// 	}
			// }
			

			//console.log("hay contenido?", store.uidCharacter)
				// store.uidCharacter.map((id) =>{
				// 	fetch(`https://www.swapi.tech/api/people/${id}`)
				// 	.then((response) => response.json())
				// 	.then((data) =>{
				// 		console.log(data.result)
				// 		console.log("HOLA?")
				// 		setStore(currentData => currentData.concat({detailCharacter: data.result}))
				// 		console.log(store.detailCharacter)
				// 	})
				// 	.catch((error) => console.log(error))
				// })
				
			

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
