import { useEffect, useState } from "react";
import app from "./firebase";
import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser ,setCurentUser] = useState(null);
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurentUser);
    }, []);

    return (
      <AuthContext.Provider
      value={{
         currentUser 
        }}
      >
        {children}
      </AuthContext.Provider>  
    );
};