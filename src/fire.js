// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC5oQvqzesMWPJafxtpEl2iqRsZ0VcR02E",
  authDomain: "login-signup-8af30.firebaseapp.com",
  projectId: "login-signup-8af30",
  storageBucket: "login-signup-8af30.appspot.com",
  messagingSenderId: "119068346780",
  appId: "1:119068346780:web:c5496afec3ac16f6ef6059"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const auth = getAuth()