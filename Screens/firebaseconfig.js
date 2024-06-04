import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA8_tPobmWvDJF4RCjPRrDJxjdM2n9IadY",
  authDomain: "lms-authentication-9625f.firebaseapp.com",
  projectId: "lms-authentication-9625f",
  storageBucket: "lms-authentication-9625f.appspot.com",
  messagingSenderId: "169193685948",
  appId: "1:169193685948:web:629b7b942cafea6515a1b9",
  measurementId: "G-TDSTRSCH7M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
