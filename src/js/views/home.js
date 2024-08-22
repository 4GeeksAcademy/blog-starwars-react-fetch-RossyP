import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters.jsx";
import { Characters2 } from "../component/characters2.jsx"
import { Planets } from "../component/planets.jsx";

export const Home = () => {

	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.obteniendoPersonajes()
		actions.obteniendoPlanetas()
	},[])

	useEffect(()=>{
		actions.detallePersonaje()
		console.log(store.uidCharacter)
	}, [store.uidCharacter])

	console.log(store.uidCharacter)

	return(
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<Characters2 />

			<h1>Planets</h1>
			<Planets />

			
			<h2>DETALLE</h2>
			{
				store.detailCharacter.map((item) => (
					<p key={item.description._id}>{item.properties.hair_color}</p>
				))
			}
		</div>
	)
};
