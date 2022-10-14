import React from "react";
import CardItem from "./CardItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { RotatingLines } from  'react-loader-spinner'

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && (
       <RotatingLines
       strokeColor="green"
       strokeWidth="5"
       animationDuration="0.75"
       width="96"
       visible={true}
     />
      )}

      <div className="card-grid">
        {
          images.map((image) => (
            <CardItem 
              key={image.id}
              { ...image }
            />
          ))
        }
        
      </div>
    </>
  );
};

export default GifGrid;
