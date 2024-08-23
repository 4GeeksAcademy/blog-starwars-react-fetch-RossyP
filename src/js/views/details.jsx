import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Details = () => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
  

    useEffect(() => {
        
        actions.detallePersonaje(id)

        if(store.detailCharacter?.properties?.homeworld){
            actions.planetasPorURL(store.detailCharacter.properties.homeworld)
        }
    }, [id, store.detailCharacter, actions])

    return (
        <div>
            <h1>VISTA DETAILS</h1>
            <h2>este es mi id {id}</h2>
            <div>
                <div>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} onError={(e) => e.target.src = noImage}/> 
                </div>
                <div>
                    <h1>{store.detailCharacter?.properties?.name}</h1>
                    <p>{store.detailCharacter?.description}</p>
                    <p>Hair color: {store.detailCharacter?.properties?.hair_color}</p>
                    <p>Skin color: {store.detailCharacter?.properties?.skin_color}</p>
                    <p>Eye color: {store.detailCharacter?.properties?.eye_color}</p>
                    <p>Birth year: {store.detailCharacter?.properties?.birth_year}</p>
                    <p>Gender: {store.detailCharacter?.properties?.gender}</p>
                    <p>Homeworld: {store.urlPlanet?.properties?.name}</p>
                    <p>Mass: {store.detailCharacter?.properties?.mass}</p>
                    <p>Height: {store.detailCharacter?.properties?.height}</p>
                </div>
                
            </div>
        </div>
    )
}