import React from 'react'
import useAuth from '../../../hooks/useAuth'

export default function MutualFunds() {

   const {refershToken} = useAuth();


   const refreshTokenButtonHandel = () =>{
      refershToken();
   }

  return (
    <>
       <div>
        <h2>Investments</h2>

        <div>
         <button onClick={refreshTokenButtonHandel}>Refersh Token</button>
        </div>
        
        <div className='cardrow'>
            <div className='card'>

                 <div>
                    current value <br/>
                     37000 Rs
                 </div>
                 <div>
                    Invested value <br/>
                     39000 Rs
                 </div>
                 <div>
                    Total Returns <br/>
                     -10%
                 </div>


            
            </div>
         </div>
       </div>
    </>
  )
}
