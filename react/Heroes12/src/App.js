import {useEffect, useReducer} from 'react';
import './App.css';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routes/AppRouter';

// localStorage 
// me deja guardar el valor desde el lado del servidor
// se va a aguardar en texto plano entonces lo parseo
// y entro dentro de local storage y pregunto si no existe user
// que me devuelva loguado en false
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {
    logueado : false
  }
}


function App() {
  // useReduce user es un estado- va a ser como setState
  // el primer parametro el modulo de reducer  e segundo es el estado inicial y como tercer paramentro
  // puedo setear el segundo parametro

const [user, dispatch] = useReducer(authReducer, {}, init);


// useEffect se va a ejecutar cuando el estado cambie. 
// y ahi te guarda el estado
useEffect(() => {
  
  localStorage.setItem('user', JSON.stringify(user, null, 3));
  
}, [user]);


  return (
    // ponemos auth en la parte mas alta de nuestra aplcacion
    // manipulo las rutas con auth - traemos el objeto user.
    //  -dispatch el dipardor va setear el usuario si esta loguado o no
    <AuthContext.Provider value={
      {
        user,
        dispatch
      }
    }>
      <AppRouter />
    </AuthContext.Provider>


  );
}

export default App;
