import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import noImage from "../../img/sinImage.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import "../../styles/carousel.css"



export const Species = () => {

    const {store, actions} = useContext(Context)
    const navigate = useNavigate()
    

    useEffect(() => {
        const todasLasEspecies = async () => {
            await actions.todasLasEspecies();
        };

        todasLasEspecies();
    }, []);


    const handleDetailsButton = (newId) => {
        navigate(`/details-species/${newId}`)
    }

    const handleFavorite = (fav) => {
        actions.agregandoFavoritos(fav)
        console.log(store.favorites)
    }


    const CustomLeftArrow = ({ onClick }) => (
        <button className="custom-arrow custom-left-arrow position-absolute border-0 bg-transparent" onClick={onClick}>
            <FontAwesomeIcon icon={faCaretLeft} className="text-danger"/>
        </button>
    );

    const CustomRightArrow = ({ onClick }) => (
        <button className="custom-arrow custom-right-arrow position-absolute border-0 bg-transparent" onClick={onClick}>
            <FontAwesomeIcon icon={faCaretRight}  className="text-danger"/>
        </button>
    );

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: "transparent"}}>
            <div className="w-75">
                <Carousel responsive={responsive} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />}>
                    {
                        store.allSpecies.map((specie)=>(
                            <div key={specie.uid} className="w-100" style={{fontFamily:"Barlow Condensed"}}>
                                <img className="w-75 rounded-circle" src={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`} onError={(e) => e.target.src = noImage}/>
                                <h3 className="text-white">{specie.name}</h3>
                                <div className="d-flex gap-2 justify-content-center align-items-center">
                                    <button type="button" className="btn bg-danger text-warning" onClick={() => handleDetailsButton(specie.uid)}>MORE</button>
                                    <button type="button" class="btn btn-outline-warning" onClick={()=> handleFavorite(specie.name)}><FontAwesomeIcon icon={faHeart} /></button> 
                                </div>
                            </div>
                        ))
                    }
                </Carousel>;
            </div>
        </div>
    )
}