import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState("");
// cuando se genero un input la funcion va  a traer el valor y lo va a setear
    const handleInputChange = ({target}) => {

        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
// si es mayor a dos letra el buscador  va a devolver un array con las nueva palabra y se la va agregar  a la categoria que tenia

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
// despues le digo a setinputvalues vuelva a su estado inicial
            setInputValue("")
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        // el estado  va y cambiando cuando se genero un input
            type="text"
            className='form-control'
            onChange={handleInputChange}
            value={inputValue}

        />
    </form>
  )
}
