import React, { useState } from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { Context } from "../store/appContext";
import sinImagen from "../../img/sinImagen.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import "../../styles/carousel.css"

export  const Characters2 = (props) => {

    const {store, actions} = useContext(Context)
    const navigate = useNavigate()

    const handleDetailsButton = (newId) => {
        navigate(`/details-characters/${newId}`)
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


    return (
        <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: "transparent"}}>
            <div className="w-75">
                <Carousel responsive={responsive} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />}>
                    {
                        store.characters.map((character)=>(
                            <div className="w-100" style={{fontFamily:"Barlow Condensed"}}>
                                <img className="w-75 rounded-circle"  src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} />
                                <h3 className="text-white">{character.name}</h3>
                                <button type="button" className="btn bg-danger text-warning" onClick={() => handleDetailsButton(character.uid)}>MORE</button>
                            </div>
                        ))
                    }
                </Carousel>;
        
            </div>
        </div>
    );          
};
