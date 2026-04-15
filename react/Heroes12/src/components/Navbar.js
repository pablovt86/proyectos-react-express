import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types';

export const Navbar = () => {


  const {user,dispatch} = useContext(AuthContext);
  const {name} = user;


  const handleLogout = () => {

    dispatch({
      type : types.logout,
      payload : null
    })

  }

  return (
    <header className='container-fluid'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Heroes App</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/marvel">Marvel</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dc">DC Comics</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/search">Search</NavLink>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <p className='nav-item nav-link text-info mb-0'>
                {name}
              </p>
              <button 
                className='nav-item nav-link border-0 bg-transparent'
                onClick={handleLogout}
                >
                  Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  )
}
