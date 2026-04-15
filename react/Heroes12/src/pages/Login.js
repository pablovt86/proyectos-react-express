import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types';

export const Login = () => {

  const lastPath = localStorage.getItem('lastPath') || '/marvel';
  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({
      type : types.login,
      payload : {
        name : 'Eric'
      }
    })
    navigate(lastPath)
  }

  return (
    <div className='mt-5 container'>
        <h1>Login</h1>
        <hr/>
        <button
        className='btn btn-primary'
        onClick={handleLogin}
        >
          Login
        </button>
    </div>
  )
}
