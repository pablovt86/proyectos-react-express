import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
// es un componente que va a comsumir una api.
// y va  trabajr con stado que va a tener un objecto  
export const useFetchGifs = (category) => {
  
  const [state, setState] = useState({
    // cuando la respuesta llegue el loanding va a cambiar a false
      data : [],
      loading : true
  });
// cada vez que haga la consulta el array se va a llenar de la consulta y el loading va estar en true
// y verifico el estado cada vez que categoria venga nuevo valor 
// 



  useEffect(() => {
// traigo el resultado de la api la manipulo con el then
      getGifs(category)
      // recibo una catidad de gifis
        .then((gifs) => {
          // una que llegue la informacion el loading no va  estar cargando y va  a cambiar 
          // su estado por que va a tener una imformacion 
            setState({
              data:gifs,
              loading:false
            })
        })
        .catch(error => console.error(error))
     
  }, [category]);
  
  
   return state
}
