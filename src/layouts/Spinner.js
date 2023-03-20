import React from 'react'
import spinnerLoading from '../asset/spinnervlll.gif'; 

export default function Spinner() {
  return (
    <div className='spinnerWrap'>
        <div className='imagewrap'> 
           <img src={spinnerLoading} alt="loading"/>
        </div>
    </div>
  )
}
