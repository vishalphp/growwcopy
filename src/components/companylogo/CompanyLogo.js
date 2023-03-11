import React from 'react'
import logolight from '../../asset/logo-light.svg'
import '../companylogo/companylogo.css'

export const CompanyLogo = () => {
  return (
    <div className='companylogo' >
       <img src={logolight} alt="login" />
    </div>
  )
}
