import React, {useState, useContext, useEffect} from 'react'
import useProvateAuthAxios from '../../../hooks/useProvateAuthAxios'
import LoginContext from '../../../context/LoginContext';


const userAPIURL = 'wp-json/wp/v2/users';

export default function UsersList() {

    const [users, setUsers] = useState([]);
    const loginCData = useContext(LoginContext);
    const provateAxiosHook = useProvateAuthAxios();

    useEffect(()=>{
        refreshTokenButtonHandel();
    },[]);

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
           isMounted && setUsers(resp.data);
  
        }catch(e){
           console.log(e);
        }
        
        return()=>{
           isMounted = false;
           abortController.abort();
         };
        
  
     }

     const userlistD = users.map(user => <li><div>{user.id}</div><div>{user.name}</div></li>);
  
    return (
   <>
    <h2>Users List</h2>
   <div className='warpboxauth'>Auth Token {loginCData.loginState.authToken}</div>
    <ul>
        {userlistD}
    </ul>

   </>
   
  )
}
