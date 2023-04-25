import {useContext} from 'react'
import axios from '../api/BackendApi'
import LoginContext from '../context/LoginContext'

const LoginURL = '/wp-json/jwt-auth/v1/token';

const RefLoginURL = '/wp-json/jwt-auth/v1/token';

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
                const tempLoginData = { id: responce.data.id, name: responce.data.user_display_name, username: responce.data.user_email, roles: responce.data.role, authToken: responce.data.token, authPassword: password}
                loginContex.setLoginState(tempLoginData);

                return 200;

            }catch(e){
                 return e.response.data.data.status;
            }
       

    }

    const refershToken = async() =>{

        try{

            const responce = await axios.post(
                RefLoginURL,
                JSON.stringify({
                    username: loginContex.loginState.username,
                    password: loginContex.loginState.authPassword
                }),
                {
                headers: {'content-type': 'application/json' }
                }
            );  

            loginContex.setLoginState((prev) =>{ 
                                 return { ...prev,  authToken: responce.data.token }
                                        });

            return responce.data.token;

        }catch(error){
                return error.response.data.data.status;
        }


    }

    return { loginApi, refershToken };

}

export default useAuth;