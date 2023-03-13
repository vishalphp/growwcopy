import React from 'react'
import axios from '../api/BackendApi'

const LoginURL = '/wp-json/jwt-auth/v1/token';

const useAuth = () => {

   

    const loginApi = async(email, password) =>{

            try{

                const responce = await axios.post(
                    LoginURL,
                    JSON.stringify({
                        username: email,
                        password: password
                    }),
                    {
                    headers: {'content-type': 'application/json' }
                    }
                );

                console.log(responce);

            }catch(e){
                console.log(e);
            }
       

    }

    return { loginApi };

}

export default useAuth;