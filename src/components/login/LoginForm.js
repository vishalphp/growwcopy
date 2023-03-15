import React, {useEffect, useState, useContext} from 'react'
import useAuth from '../../hooks/useAuth';

import LoginContext from '../../context/LoginContext';

export default function LoginForm() {

    const [username, setUsername ] = useState('');
    const [usernameValid, setUsernameValid] =useState(true);
    const [usernameBlur, setUsernameBlur] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordBlur, setPasswordBlur] = useState(false);

    const loginContex = useContext(LoginContext);

    const { loginApi } = useAuth();
    
    const regxEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

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
    },[username, password]);

    useEffect(()=>{ 
            console.log(loginContex.loginState);
    },[username]);

    const loginSubmitHandler= async(e)=>{
        e.preventDefault();
     
        await loginApi(username, password);

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
