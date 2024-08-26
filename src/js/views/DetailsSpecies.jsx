import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const DetailsSpecies = () => {

    const {store, actions} = useContext(Context)
    const {id} = useParams()

    useEffect(()=>{
        actions.detalleSpecies(id)
    },[])


    useEffect(() => {
        if (store.detailSpecie?.properties?.homeworld) {
            actions.planetaPorURL(store.detailSpecie.properties.homeworld);
        }
        if (store.detailSpecie?.properties?.people) {
            actions.personajePorURL(store.detailSpecie.properties.people);
        }
    }, [store.detailSpecie, actions]);
    
    return(
        <div className="fondoPrincipal d-flex justify-content-center align-items-center vh-100">
                <div className="d-flex py-3 bg-warning" style={{width: "60%"}}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} onError={(e) => e.target.src = noImage} className="w-75"/> 
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                        <h1 className="textPerson">{store.detailSpecie?.properties?.name}</h1>
                        <p className="text">{store.detailSpecie?.description}</p>
                        <p className="text"><span className="textCategory fw-bold">Classification:</span> {store.detailSpecie?.properties?.classification}</p>
                        <p className="text"><span className="textCategory fw-bold">Designation:</span> {store.detailSpecie?.properties?.designation}</p>
                        <p className="text"><span className="textCategory fw-bold">Average height:</span> {store.detailSpecie?.properties?.average_height}</p>
                        <p className="text"><span className="textCategory fw-bold">Average lifespan:</span> {store.detailSpecie?.properties?.average_lifespan}</p>
                        <p className="text"><span className="textCategory fw-bold">Hair colors:</span> {store.detailSpecie?.properties?.hair_colors}</p>
                        <p className="text"><span className="textCategory fw-bold">Eye colors:</span> {store.detailSpecie?.properties?.eye_colors}</p>

                        <p className="text"><span className="textCategory fw-bold">Homeworld:</span> {store.urlPlanet?.properties?.name}</p>

                        <p className="text"><span className="textCategory fw-bold">Language:</span> {store.detailCharacter?.properties?.language}</p>
                        <p className="text"><span className="textCategory fw-bold">People:</span> {store.urlCharacters?.properties?.name}</p>
                    </div>
                    
                </div>
        </div>
    )
}