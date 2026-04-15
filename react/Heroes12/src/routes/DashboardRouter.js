import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import {Marvel} from '../pages/Marvel'
import {Dc} from '../pages/Dc'
import { Search } from '../pages/Search';
import { Heroe } from '../pages/Heroe'


export const DashboardRouter = () => {

  const {pathname} = useLocation();
  //console.log(pathname)
  localStorage.setItem('lastPath', pathname)

  return (
    <>
    <Navbar/>
    <div className='container mt-3'>
        <Routes>
            <Route path='/marvel' element={<Marvel/>}/>
            <Route path='/dc' element={<Dc/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/heroe/:heroeID' element={<Heroe/>}/>
            <Route path='*' element={
                <main>
                    <p>Estás perdido??</p>
                </main>
            }/>
        </Routes>
    </div>
    </>
  )
}
