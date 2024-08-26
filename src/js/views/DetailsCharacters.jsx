import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";
import noImage from "../../img/sinImage.png"
import "../../styles/detail.css"

export const DetailsCharacters = () => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
  

    useEffect(() => {
        
        actions.detallePersonaje(id)

        if(store.detailCharacter?.properties?.homeworld){
            actions.planetasPorURL(store.detailCharacter.properties.homeworld)
        }
    }, [id, store.detailCharacter, actions])

    return (
        <div className="fondoPrincipal d-flex justify-content-center align-items-center vh-100">
                <div className="d-flex py-3 bg-warning" style={{width: "60%"}}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} onError={(e) => e.target.src = noImage} className="w-75"/> 
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                        <h1 className="textPerson">{store.detailCharacter?.properties?.name}</h1>
                        <p className="text">{store.detailCharacter?.description}</p>
                        <p className="text"><span className="textCategory fw-bold">Hair color:</span> {store.detailCharacter?.properties?.hair_color}</p>
                        <p className="text"><span className="textCategory fw-bold">Skin color:</span> {store.detailCharacter?.properties?.skin_color}</p>
                        <p className="text"><span className="textCategory fw-bold">Eye color:</span> {store.detailCharacter?.properties?.eye_color}</p>
                        <p className="text"><span className="textCategory fw-bold">Birth year:</span> {store.detailCharacter?.properties?.birth_year}</p>
                        <p className="text"><span className="textCategory fw-bold">Gender:</span> {store.detailCharacter?.properties?.gender}</p>
                        <p className="text"><span className="textCategory fw-bold">Homeworld:</span> {store.urlPlanet?.properties?.name}</p>
                        <p className="text"><span className="textCategory fw-bold">Mass:</span> {store.detailCharacter?.properties?.mass}</p>
                        <p className="text"><span className="textCategory fw-bold">Height:</span> {store.detailCharacter?.properties?.height}</p>
                    </div>
                    
                </div>
        </div>
    )
}