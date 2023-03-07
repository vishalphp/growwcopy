import React from 'react'
import logolight from '../../asset/logo-light.svg'
import modelBackground from '../../asset/modelBackground.svg'
import patternIeftlogin from '../../asset/patternIeftlogin.svg'

import '../login/login.css'

const Login = () => {
  return (
    <>
    <div className='mainbackgroundimage' style={{backgroundImage:`url(${modelBackground})` }}>
    
   
    <div className='companylogo' >
        <img src={logolight} alt="login" />
    </div>
    <div className='formsection'>
        <div className='leftwraper' style={{backgroundImage:`url(${patternIeftlogin})` }}>
           <div class="lTopText">Simple, Free</div>
           <div class="lTopText">Investing.</div>
        </div>
        <div className='rightwraper'>
           
           <div className='wecomemessge'>
                 Welcome To Groww
           </div>

      <form name='loginform' >

       <div className='fieldwrapper'>
          <label htmlFor='email' className='animate__fadeInUp'>Email</label>
          <input type="text" id="email" name="email" value="" className='email textClass' />      
       </div>

       <div className='fieldwrapper'>
          <label htmlFor='password'>Password</label>
          <input type="password" id='password' name="password" value="" className='password textClass' />      
       </div>

       <div className='fieldwrapper'>
          <input type="submit" name="submit" value="Submit" className='submit btn fontsize16 fontweight600' />      
       </div>
       </form>
       
       </div>
       </div>
       </div>
    </>
  )
}

export default Login;