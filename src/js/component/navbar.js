import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)

	// useEffect(()=>{
	// 	actions.personajePorURL()
	// },[])

	return (
		<nav className="navbar navbar-light" style={{backgroundColor: "#000000", height: "60px"}}>
			<div className="p-1 ms-3">
				<Link to="/">
					<img src="https://img.icons8.com/?size=100&id=21576&format=png&color=000000"/>
				</Link>	
			</div>

			<div className="ml-auto me-5">
				<Link to="/">
					<button type="button" className="btn btn-warning fw-bold px-5" style={{fontFamily:"Barlow Condensed"}}>HOME</button>
				</Link>
			</div>
		</nav>
	);
};
