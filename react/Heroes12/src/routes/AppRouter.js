import React, {useContext} from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import {Login} from '../pages/Login'
import { DashboardRouter } from './DashboardRouter'

export const AppRouter = () => {

const {user} = useContext(AuthContext);
// aca recibimos un booleanos en el logueado
const logueado = user.logueado;

  return (
    <BrowserRouter>
        <div className=''>
            <Routes>
              {/* navigate te redirije a login  si no estas loguado de lo contrario envialo a /marvel*/}
                <Route path='/login' element={!logueado ? <Login/> : <Navigate to="/marvel"/>}/>
                <Route path='*' element={ logueado ? <DashboardRouter/> : <Navigate to='/login'/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
