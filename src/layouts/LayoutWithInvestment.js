import React from 'react'
import { Outlet } from 'react-router-dom';

const LayoutWithInvestment =()=> {
  return (
    
      <>
      <main className="App">
       <div className='midleftsection'>
           <Outlet />
       </div>
        <div className='ivestmentpanel'>
            <div>Your Investment</div>
            <div>
                all investment show here
            </div>
        </div>
      </main>
      </>

  )
}

export default LayoutWithInvestment;
