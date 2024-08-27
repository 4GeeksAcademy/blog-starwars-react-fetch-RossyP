import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";
import noImage from "../../img/sinImage.png"

export const DetailsPlanets = () => {

    const {store, actions} = useContext(Context)
    const {id} = useParams()


    useEffect(()=>{
        actions.detallePlanetas(id)
    },[])
    return(
        <div className="card bg-transparent d-flex justify-content-center align-items-center vh-100" style={{marginTop: "120px", marginBottom:"100px"}}>
                <div className="row d-flex py-3 bg-warning" style={{width: "60%", borderRadius: "20px"}}>
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} onError={(e) => e.target.src = noImage} className="w-100" style={{borderTopLeftRadius: "20px", borderBottomLeftRadius:"20px"}}/> 
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-start">
                        <div className="card-body">
                            <h1 className="textPerson">{store.detailPlanet?.properties?.name}</h1>
                            {/* <p className="text">{store.detailPlanet?.description}</p> */}
                            <p className="text"><span className="textCategory fw-bold">Diameter:</span> {store.detailPlanet?.properties?.diameter}</p>
                            <p className="text"><span className="textCategory fw-bold">Rotation period:</span> {store.detailPlanet?.properties?.rotation_period}</p>
                            <p className="text"><span className="textCategory fw-bold">Orbital period:</span> {store.detailPlanet?.properties?.orbital_period}</p>
                            <p className="text"><span className="textCategory fw-bold">Gravity:</span> {store.detailPlanet?.properties?.gravity}</p>
                            <p className="text"><span className="textCategory fw-bold">Population:</span> {store.detailPlanet?.properties?.population}</p>
                            <p className="text"><span className="textCategory fw-bold">Climate:</span> {store.detailPlanet?.properties?.climate}</p>
                            <p className="text"><span className="textCategory fw-bold">Terrain:</span> {store.detailPlanet?.properties?.terrain}</p>
                            <p className="text"><span className="textCategory fw-bold">Surface water:</span> {store.detailPlanet?.properties?.surface_water}</p>
                        </div>
                        
                    </div>
                    
                </div>
        </div>
    )
}