import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters.jsx";

export const Home = () => {

	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.obteniendoPersonajes()
		
	},[])

	useEffect(()=>{
		actions.detallePersonaje()
		console.log(store.uidCharacter)
	}, [store.uidCharacter])

	//console.log(store.uidCharacter)

	return(
		<div className="text-center mt-5">
			<h1>Hola soy el Home</h1>
			{
				store.characters.map((character) => (
					<Characters key={character.uid} name={character.name} uid={character.uid} url={character.url}/>
				))
			}

			<h2>DETALLE</h2>
			{
				store.detailCharacter.map((item) => (
					<p key={item.description._id}>{item.properties.hair_color}</p>
				))
			}
		</div>
	)
};
