import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext"
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';


export const Favorites=() =>{
    const {store, actions} = useContext(Context)

    const handleDeleteFavorite = (fav) => {
        actions.eliminandoFavorito(fav)
        console.log(store.favorites)
    }

    return(
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="fw-bold" style={{borderColor:"yellow", borderWidth:"2px", fontFamily:"Barlow Condensed", fontSize:"14px"}}>
                FAVORITES
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {store.favorites.length > 0 ?(
                    store.favorites.map((item, index) => (
                        <Dropdown.Item key={index} className="d-flex justify-content-between align-items-center fw-bold" style={{fontFamily:"Barlow Condensed"}}>
                            {item}
                            <FontAwesomeIcon icon={faX} onClick={() => handleDeleteFavorite(item)}/>
                        </Dropdown.Item>
                    ))
                    ):(
                        <p className="text-center text-secondary" style={{fontFamily:"Barlow Condensed"}}>There are no favorites</p>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}