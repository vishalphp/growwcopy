import { useEffect, useContext } from 'react';
import { provateAxios } from '../api/BackendApi';
import useAuth from './useAuth';
import LoginContext from '../context/LoginContext';

const useProvateAuthAxios = () => {
   const { refershToken } = useAuth(); 
    const LoginContextRefsh = useContext(LoginContext);

    useEffect(()=>{

        //request
        const requestIntercept = provateAxios.interceptors.request.use(
            (config)=>{
                  if(!config.headers['Authorization']){
                    config.headers['Authorization'] =  `Bearer ${LoginContextRefsh.loginState.authToken}`;
                  }
                  return config;
            }, (error)=>{
                return Promise.eject(error);
            }
        );

           //post
           const responseIntercept = provateAxios.interceptors.response.use(
            (response)=>{
                  return response
            }, async(error)=>{

                const previousConfig = error.config;

                if(error?.response?.status === 403 || !previousConfig.sent){
                    previousConfig.sent = true;
                    const newaccessToken = await refershToken();
                    //console.log(newaccessToken);
                    previousConfig.headers['Authorization'] =  `Bearer ${newaccessToken}`;
                    return provateAxios(previousConfig);
                }
              return Promise.reject(error);
            }
        );
     
        return ()=>{
            provateAxios.interceptors.request.eject(requestIntercept);
            provateAxios.interceptors.response.eject(responseIntercept); 
        }

    },[LoginContextRefsh.loginState, refershToken]);

 
    return provateAxios;
    
}

export default useProvateAuthAxios;