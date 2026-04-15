import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


// va a traer la categoria que busco en el input
export const GifGrid = ({category}) => {

// voy a guardar la informacion de nuestro hook en un objecto
// cambio el nombre de los datos a images
 const {data: images, loading} = useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {/* aplicar loading... */}
    {
      loading && <p>cargando...</p>
    }
    <div className='row'>
    {/* aquí van las tarjetas mapeadas */}
    {
      images.map(image =>(
        <GifGridItem 
        key={image.id}
        {...image}
        
        />
      ))
    }
    </div>
    </>
  )
}

