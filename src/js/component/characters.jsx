import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
//import "./../../img/sinImagen.png"
import sinImagen from "../../img/sinImagen.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export  const Characters = (props) => {

    const {store, actions} = useContext(Context)

        // const images = [sinImagen, sinImagen, sinImagen]
        // const [imageSelect, setImageSelect] = useState(images[0])
        // const [indexSelect, setIndexSelect] = useState(0)




        // const selectNewImage = (index, images, next = true) => {
        //       const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        //       const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        //       setImageSelect(images[nextIndex]);
        //       setIndexSelect(nextIndex);
        //   };

        // function previous() {
        //     setImageSelect(imageSelect, ) 
        
        // }

        // function next () {

        //     setIndexSelect(nextIndex)
        // }
        return (
            <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{width: "20%"}}>
                <div className="carousel-indicators">
                    {store.characters.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {store.characters.map((character, index) => (
                        <div
                            key={character.uid}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            data-bs-interval="10000"
                        >
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                                className="d-block w-100"
                                alt={character.name}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{character.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
};
