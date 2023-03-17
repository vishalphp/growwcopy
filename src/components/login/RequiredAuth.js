import React, {useContext} from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import LoginContext from '../../context/LoginContext'

export default function RequiredAuth() {

  const location = useLocation();

  const loginContex = useContext(LoginContext);
 
  return loginContex.loginState.authToken ? <Outlet /> : <Navigate to="/login" replace state={{ path: location.pathname }} />;
}
