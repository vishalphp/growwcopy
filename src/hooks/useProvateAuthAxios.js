import { useEffect, useContext } from 'react';
import { ProvateAxios } from '../api/BackendApi';
import useAuth from './useAuth';
import LoginContext from '../context/LoginContext';

const useProvateAuthAxios = async() => {
   const { refershToken } = useAuth(); 
    const LoginContextRefsh = useContext(LoginContext);

    useEffect(()=>{

        //request
        const requestIntercept = ProvateAxios.interceptors.request.use(
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
           const responseIntercept = ProvateAxios.interceptors.response.use(
            (response)=>{
                  return response
            }, async(error)=>{

                const previousConfig = error.config;

                if(error?.response?.status === 403 || !previousConfig.sent){
                    previousConfig.sent = true;
                    const newaccessToken = await refershToken();
                    //console.log(newaccessToken);
                    previousConfig.headers['Authorization'] =  `Bearer ${newaccessToken}`;
                    return ProvateAxios(previousConfig);
                }
              return Promise.reject(error);
            }
        );
     
        return ()=>{
            ProvateAxios.interceptors.request.eject(requestIntercept);
            ProvateAxios.interceptors.response.eject(responseIntercept); 
        }

    },[LoginContextRefsh.loginState, refershToken]);

 
    return ProvateAxios;
    
}

export default useProvateAuthAxios;