import React, {useContext} from 'react'
import axios from '../api/BackendApi'
import LoginContext from '../context/LoginContext'

const LoginURL = '/wp-json/jwt-auth/v1/token';

const useAuth = () => {

    const loginContex = useContext(LoginContext);
   

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

                const tempLoginData = { username: responce.data.user_email, roles: responce.data.role, authToken: responce.data.token}

                loginContex.setLoginState(tempLoginData);

            }catch(e){
                console.log(e);
            }
       

    }

    return { loginApi };

}

export default useAuth;