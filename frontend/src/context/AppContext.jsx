import React, { useState } from "react";

import {
 
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../Pages/firebase_config";
import { useEffect } from "react";
// import axios from "axios";


export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [user_Auth,set_Auth]=useState({
    user_Auth:false,
    token:null
  });
  const userLogin=(token)=>{
    set_Auth({user_Auth:true,token:token});

  }
  function logOut() {
    return signOut(auth);
  }
 
  

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function facebookSignIn() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  }

 console.log("user_Auth",user_Auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
  

  return (
    <AuthContext.Provider
      value={{ user, logOut, googleSignIn, facebookSignIn,user_Auth,userLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
