import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import noImage from "../../img/sinImage.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import "../../styles/carousel.css"


export const Planets = () => {

    const {store, actions} = useContext(Context)
    const navigate = useNavigate()

    const handleDetailsButton = (newId) => {
        navigate(`/details-planets/${newId}`)
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
        <div>
                <Carousel responsive={responsive} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />}>
                    {
                        store.planets.map((planet)=>(
                            <div>
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={(e) => e.target.src = noImage} />
                                <h1>{planet.name}</h1>
                                <button type="button" className="btn btn-primary" onClick={() => handleDetailsButton(planet.uid)}>Primary</button>
                            </div>
                        ))
                    }
                </Carousel>;
        </div>
    )
}