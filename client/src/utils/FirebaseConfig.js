// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";4
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-YeiybMt95_iFlfi6-zWAG5OPciOOl_c",
  authDomain: "earnest-mark-385414.firebaseapp.com",
  databaseURL: "https://earnest-mark-385414-default-rtdb.firebaseio.com",
  projectId: "earnest-mark-385414",
  storageBucket: "earnest-mark-385414.appspot.com",
  messagingSenderId: "497010076726",
  appId: "1:497010076726:web:54445187ee5f7323147c97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
