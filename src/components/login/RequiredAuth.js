import React, {useContext, useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import LoginContext from '../../context/LoginContext'

export default function RequiredAuth() {

    const navigate = useNavigate(); 

    const loginContex = useContext(LoginContext);
 
    useEffect(()=>{
        // eslint-disable-next-line no-unused-expressions
        loginContex.loginState.authToken ? '' : navigate('/login');
    },[]);

 

  return <Outlet />;
}
