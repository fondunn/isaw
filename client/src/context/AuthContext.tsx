import React, { useEffect, useState } from "react";
import { IContext, IContextChildrenProps } from "../types/AuthContext";

// import { IContext, IContextChildrenProps } from "../interfaces/provider";
import { getCookie } from "../utils/getCookie";

interface IAuthorize {
  email: string,
  uid: string,
  displayName: string
}

const initialState : IAuthorize = {
  email: null,
  uid: null,
  displayName: null
}

export const AuthContext = React.createContext<IContext | undefined>(undefined);

const AuthProvider : React.FC<IContextChildrenProps> = ({ children }) => {
  const [authState, setAuthState] = useState(initialState)

  useEffect(() => {
    const cookiesUID = getCookie('uid')
    const cookiesDisplayName = getCookie('displayName')
    const cookiesEmail = getCookie('email')
    if (cookiesUID) {
      setAuthState({
        uid: cookiesUID,
        email: cookiesEmail,
        displayName: cookiesDisplayName
      })
    }
  }, [])

  const authorize = (obj:IAuthorize) => {
    setAuthState(obj)
  }
  const logout = () => {
    setAuthState(initialState)
  }

  return (
    <AuthContext.Provider value={{
      user: authState, 
      login: (obj: IAuthorize) => authorize(obj),
      logout
    }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
