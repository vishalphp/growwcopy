import React, { useState, useContext, useEffect } from 'react'
import { provateAxios } from '../../../api/BackendApi'
import LoginContext from '../../../context/LoginContext';

export default function ProfileImage() {

    const [ProfilImage, setProfileImage] = useState();
    const loginCtx = useContext(LoginContext);

    const usermeta = 'wp-json/wp/v2/users/'+loginCtx.loginState.id;

    useEffect(()=>{
        lodeImage();
    },[]);
       
    const lodeImage = async() =>{
      let isMounted = true;
      const abortController = new AbortController();
     
        try{

      
          const res = await provateAxios.get(usermeta,{
                signal: abortController.signal,
                headers: {
                'Content-Type':'application/json', 
                //'Authorization': `Bearer ${loginCtx.loginState.authToken}`
                //// withCredentials: true
                }
           });

           for (let [key, value] of Object.entries(res.data.avatar_urls)){
              if(key==='96'){
                setProfileImage(value);
              }
           }
            
        }catch(e){
          console.log(e);
        } 

        return()=>{
            isMounted = false;
            abortController.abort();
          };
    

    }
    
 


  return (
    <>
    <img style={{width:'30px', borderRadius:'8px'}} src={ProfilImage} alt="user profile" />
    </>
  )
}
