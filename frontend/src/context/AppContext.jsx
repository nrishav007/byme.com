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


export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
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

 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  // console.log("user",user)

  return (
    <AuthContext.Provider
      value={{ user, logOut, googleSignIn, facebookSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
