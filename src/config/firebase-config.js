// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain:  process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID, 
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESSANGINGSENDERID , 
  appId: process.env.REACT_APP_APPID 
};

// REACT_APP_APIKEY= AIzaSyBdXdgJf5NFEXMS40fm7JO3kSWfvHA7mOQ
// REACT_APP_AUTHDOMAIN= anime-merchandise.firebaseapp.com
// REACT_APP_PROJECTID= anime-merchandise
// REACT_APP_STORAGEBUCKET= anime-merchandise.appspot.com
// REACT_APP_MESSANGINGSENDERID= 198926803849
// REACT_APP_APPID= 1:198926803849:web:24e4c3e9c6b8fc25837758



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)