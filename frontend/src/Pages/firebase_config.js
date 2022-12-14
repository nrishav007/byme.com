import {initializeApp}from "firebase/app"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAAhu8YEACwpJ6vReaYVGaVyw47fhl2zcY",
    authDomain: "authentication-byme.firebaseapp.com",
    projectId: "authentication-byme",
    storageBucket: "authentication-byme.appspot.com",
    messagingSenderId: "599771828063",
    appId: "1:599771828063:web:d8afea4411ccb0dc1930ea"
  };
  const app=initializeApp(firebaseConfig);  
export const auth=getAuth(app)
export default app
