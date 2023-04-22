// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCMm39gx27LP_HLBeIemM8Hce1wpYb2EAs",
  authDomain: "team-spades-ef2f1.firebaseapp.com",
  projectId: "team-spades-ef2f1",
  storageBucket: "team-spades-ef2f1.appspot.com",
  messagingSenderId: "918320817884",
  appId: "1:918320817884:web:f3ebc2bd0b098797937619",
  measurementId: "G-JFYJT5Q5DE"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export{app,auth};