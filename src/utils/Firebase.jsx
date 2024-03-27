// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2hQZ2K4-ay4omNKoeS0zhfx7Yp-apWak",
  authDomain: "newnetflix-6cbbc.firebaseapp.com",
  projectId: "newnetflix-6cbbc",
  storageBucket: "newnetflix-6cbbc.appspot.com",
  messagingSenderId: "686285747017",
  appId: "1:686285747017:web:e1582ca116b23cd0ab2098",
  measurementId: "G-G8CF5HSN4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export  let auth = getAuth();