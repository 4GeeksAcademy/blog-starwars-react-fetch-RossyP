import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
//import "./../../img/sinImagen.png"
import sinImagen from "../../img/sinImagen.png"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export  const Characters = (props) => {

    const {store, actions} = useContext(Context)

    const images = [sinImagen, sinImagen, sinImagen]
    const [imageSelect, setImageSelect] = useState(images[0])
    const [indexSelect, setIndexSelect] = useState(0)




    const selectNewImage = (index, images, next = true) => {
          const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
          const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
          setImageSelect(images[nextIndex]);
          setIndexSelect(nextIndex);
      };

    function previous() {
        const condition = indexSelect > 0;
        const nextIndex = condition ? indexSelect - 1 : images.length -1
        setImageSelect(images[nextIndex]) 
        setIndexSelect(nextIndex)
    }

    function next () {
        const condition = indexSelect < images.length
        const nextIndex = condition ? indexSelect + 1 : 0
         setImageSelect(images[nextIndex]) 
        setIndexSelect(nextIndex)
    }
    return(
        <div>
            
        </div>
    )
}