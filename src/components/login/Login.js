import React from 'react'

import modelBackground from '../../asset/modelBackground.svg' 
import '../login/login.css'

import { CompanyLogo } from '../companylogo/CompanyLogo'
import LeftSection from './LeftSection'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <>
    <div className='mainbackgroundimage' style={{backgroundImage:`url(${modelBackground})` }}>
    
            <CompanyLogo />

            <div className='formsection'>

                           <LeftSection />
            
                           <div className='rightwraper'>
                                 <div className='wecomemessge'>
                                    Welcome To Groww
                                 </div>
                                 <LoginForm />
                           </div>
               </div>
      </div>
    </>
  )
}

export default Login;