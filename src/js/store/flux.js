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
		},
		actions: {

			obteniendoPersonajes: () => {
				fetch("https://www.swapi.tech/api/people")
				.then((response) => response.json())
				.then((data) => {
					let uids = data.results.map(result => result.uid);
					console.log(uids)
					console.log(data.results)
					setStore({characters: data.results, uidCharacter: uids})
				})
				.catch((error)=> console.log(error))
			},

			detallePersonaje: () => {
				
				const store = getStore()
				console.log("hay contenido?", store.uidCharacter)
				store.uidCharacter.map((id) =>{
					fetch(`https://www.swapi.tech/api/people/${id}`)
					.then((response) => response.json())
					.then((data) =>{
						console.log(data.result)
						console.log("HOLA?")
						setStore(currentData => currentData.concat({detailCharacter: data.result}))
					})
					.catch((error) => console.log(error))
				})
				
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
