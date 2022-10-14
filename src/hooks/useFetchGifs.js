import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState( true );

// voy a crear una funcion asincrona para llamar a la funcion getGifs
const getImages = async () =>{
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
}

useEffect(() => {
  //montar componente
    getImages();

  //return () => {
  //  //cleanup o desmontar componente
  //  second
  //}
}, []) // array de dependecias, control si el efecto secundario se ejecuta nuevamente si hay algun cambio en algun estado

return {
    images,
    isLoading
}

}