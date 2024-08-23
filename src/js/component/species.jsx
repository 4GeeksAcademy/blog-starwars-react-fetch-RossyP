import React, {useContext} from "react";
import { Context } from "../store/appContext";
import noImage from "../../img/sinImage.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import "../../styles/carousel.css"



export const Species = () => {

    const {store, actions} = useContext(Context)

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
                    store.species.map((specie)=>(
                        <div>
                            <img src={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`} onError={(e) => e.target.src = noImage}/>
                            <h1>{specie.name}</h1>
                        </div>
                    ))
                }
            </Carousel>;
        
        </div>
    )
}