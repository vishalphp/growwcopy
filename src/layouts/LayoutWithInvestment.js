import React from 'react'
import { Outlet } from 'react-router-dom';
import Header1 from '../components/authPages/headers/Header1';

const LayoutWithInvestment =()=> {
  return (
    
      <>
      <div className='mainwraper'>
       <Header1 />
      <main className="App">
        <div className='wrpaerlayout'>
       <div className='midleftsection'>
           <Outlet />
       </div>
        <div className='ivestmentpanel'>
            <div>Your Investment</div>
            <div>
                all investment show here
            </div>
        </div>
        </div>
      </main>
      <div>Footer Section Will Come Here ....</div>
      </div>
      </>

  )
}

export default LayoutWithInvestment;