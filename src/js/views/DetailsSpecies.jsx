import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const DetailsSpecies = () => {

    const {store, actions} = useContext(Context)
    const {id} = useParams()
    const [people, setPeople] = useState([])


    useEffect(()=>{
        actions.clearUrlCharacters();
        setPeople([]);
        actions.detalleSpecies(id)


        return () => {
            actions.clearUrlCharacters();
        };
    },[id])

    

    useEffect(() => {
        if (store.detailSpecie?.properties?.homeworld) {
            actions.planetasPorURL(store.detailSpecie.properties.homeworld);
        }

        if (store.detailSpecie?.properties?.people) {
            actions.clearUrlCharacters();
            store.detailSpecie.properties.people.forEach(url => {
                actions.personajePorURL(url);
            });
        }

    }, [store.detailSpecie]);

    useEffect(() => {
        if (store.urlCharacters.length > 0) {
            setPeople(store.urlCharacters);
        }
    }, [store.urlCharacters]);


    
    console.log('Datos en store.characters:', store.characters);
    console.log('Datos en store.urlCharacters:', store.urlCharacters);
    console.log(store.personajePorURL?.properties?.name)

    console.log(people)
    return(
        <div className="card bg-transparent border-0 d-flex justify-content-center align-items-center vh-100"  style={{marginTop: "120px", marginBottom:"100px"}}>
                <div className="row d-flex py-3 bg-warning" style={{width: "60%", borderRadius: "20px"}}>
                    <div className=" col-md-7 d-flex justify-content-center align-items-center">
                        <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} onError={(e) => e.target.src = noImage} className="w-100" style={{borderTopLeftRadius: "20px", borderBottomLeftRadius:"20px"}}/> 
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-start">
                        <div className="card-body">
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
                        <p className="text">
                            <span className="textCategory fw-bold">People: </span>
                            {people.length > 0 ? (
                                people.map((personaje, index) => (
                                    <div key={index}>{personaje.properties.name}</div>
                                ))
                            ) : (
                                <span>No characters found</span>
                            )}
                        </p>
                        </div>
                        
                    </div>
                    
                </div>
        </div>
    )
}