import React, {useState} from "react";

const LoginContext = React.createContext({});

export default LoginContext;


export const LoginContextProvider = ({children}) => {

    const [loginState, setLoginState] = useState({});

  return (
    <LoginContext.Provider value={{loginState, setLoginState}} >{children}</LoginContext.Provider>
  )
}
