import React, {useState, useContext} from 'react'
import useProvateAuthAxios from '../../../hooks/useProvateAuthAxios'
import LoginContext from '../../../context/LoginContext';

const userAPIURL = 'wp-json/wp/v2/users';

export default function MutualFunds() {

   const [users, setUsers] = useState();
  const loginCData = useContext(LoginContext);
  const provateAxiosHook = useProvateAuthAxios();

   const refreshTokenButtonHandel = async() =>{
      
      let isMounted = true;
      const abortController = new AbortController();

      try{

        const resp = await provateAxiosHook.get(userAPIURL, {
            signal: abortController.signal,
            headers: {
            'Content-Type':'application/json', 
            'Authorization': `Bearer ${loginCData.loginState.authToken}`
            //// withCredentials: true
            }
         });

         console.log(resp);
         isMounted && setUsers(resp.data);

      }catch(e){
         console.log(e);
      }
      
      return()=>{
         isMounted = false;
         abortController.abort();
         console.log(users);
       };
      

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
