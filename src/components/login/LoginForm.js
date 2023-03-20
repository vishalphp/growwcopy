import React, {useEffect, useState, useContext} from 'react'
import useAuth from '../../hooks/useAuth';
import LoginContext from '../../context/LoginContext';

import { useNavigate } from 'react-router-dom';


export default function LoginForm() {

   const navigate = useNavigate();
   const loginContx = useContext(LoginContext);

    const [username, setUsername ] = useState('');
    const [usernameValid, setUsernameValid] =useState(true);
    const [usernameBlur, setUsernameBlur] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordBlur, setPasswordBlur] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const { loginApi } = useAuth();
    
    const regxEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;


    useEffect(()=>{
      loginContx.setLoginState({});
    },[]);

    const usernameHandler=(e)=>{
       setUsername(e.target.value);
       setUsernameBlur(true);
    }
 

    const passwordHandler=(e)=>{
        setPassword(e.target.value);
        setPasswordBlur(true);
    }

    useEffect(()=>{
        regxEmail.test(username) ? setUsernameValid(true) : setUsernameValid(false);
        password.length > 6 ? setPasswordValid(true) : setPasswordValid(false);
    },[username, password, regxEmail]);


    const loginSubmitHandler= async(e)=>{
        e.preventDefault();
     
      const resultTemp =  await loginApi(username, password);
      //console.log(resultTemp.response.data.data.status);
      //console.log(resultTemp);
         
       // eslint-disable-next-line no-unused-expressions
       resultTemp === 403 
       ? setErrorMessage('someting went wrong')  
        : resultTemp === 404
        ? setErrorMessage('API not working')
        : navigate('/stock/explore');
        

        setUsername(''); 
        setPassword('');
        setUsernameBlur(false);
        setPasswordBlur(false);

        

    }                                                                                                                                                                 
  

  return (
       <>
              <form name='loginform' onSubmit={loginSubmitHandler}>

                { (!usernameValid && usernameBlur) ? <p>username is not valid</p>: ''}
                { (!passwordValid && passwordBlur) ? <p>password is not valid</p>: ''}
                {errorMessage}

                <div className='fieldwrapper'>
                <label htmlFor='email' className='animate__fadeInUp'>Email</label>
                <input type="text" id="email" name="email" value={username} className='email textClass' onChange={usernameHandler} />      
                </div>

                <div className='fieldwrapper'>
                <label htmlFor='password'>Password</label>
                <input type="password" id='password' name="password" value={password} className='password textClass' onChange={passwordHandler} />      
                </div>

                <div className='fieldwrapper'>
                <input type="submit" name="submit" value="Submit" className='submit btn fontsize16 fontweight600' />      
                </div>
                </form>
       </>
  )
}
