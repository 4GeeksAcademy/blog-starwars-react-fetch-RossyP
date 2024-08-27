import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters.jsx";
import { Characters2 } from "../component/characters2.jsx"
import { Planets } from "../component/planets.jsx";
import { Species } from "../component/species.jsx";

export const Home = () => {

	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.obteniendoPersonajes()
		actions.obteniendoPlanetas()
		actions.obteniendoSpecies()
	},[])

	// useEffect(()=>{
	// 	actions.detallePersonaje()
	// 	console.log(store.uidCharacter)
	// }, [store.uidCharacter])

	// console.log(store.uidCharacter)

	return(
		<div className="fondo-home text-center mt-5" style={{backgroundColor:"#000000"}}>
			<div className="w-100 d-flex justify-content-center align-items-center">
				<h1 className="bg-warning w-75" style={{fontFamily: "Bungee Tint", borderRadius:"50px"}}>CHARACTERS</h1>
			</div>
			
			<Characters2 />
			<div className="w-100 d-flex justify-content-center align-items-center">
				<h1 className="mt-5 mb-3 bg-warning w-75" style={{fontFamily: "Bungee Tint", borderRadius:"50px"}}>PLANETS</h1>
			</div>
			
			<Planets />

			<div className="w-100 d-flex justify-content-center align-items-center">
				<h1 className="mt-5 mb-3 bg-warning w-75" style={{fontFamily: "Bungee Tint", borderRadius:"50px"}}>SPECIES</h1>
			</div>
			
			<Species />

		</div>
	)
};
