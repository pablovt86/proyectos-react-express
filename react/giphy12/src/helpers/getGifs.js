import React from 'react'
// este modulo va a ser lo que me traiga el resultado de la consulta
// a la api
export const getGifs = async (category) => {
// "1Yeee8P1g5YovY1ABJGxkXFWKtLklFzE "
    try {
        const apiKey = "Tkqr93amZJBgEarb3Al843b8llUpwDYC";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12&offset=0&rating=g&lang=en`;
        // const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12&offset=0&rating=g&lang=en`
        const response = await fetch(url);
        const {data} = await response.json();
    //   aca voy a recorrer toda la data que estoy recorriendo y le envio a la vista la propiedades que necesito  
        const gifs = data.map(gif =>(
            {
                id:gif.id,
                title:gif.title,
                url:gif.images.downsized_medium.url

            }
        
            ))
        return gifs

    } catch (error) {
        console.error(error);
        return []
    }
}
