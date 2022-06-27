
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD3hsozm1tjUszG1Syp7Hmxnppd4gGYk2o",
  authDomain: "react-employeedetails.firebaseapp.com",
  projectId: "react-employeedetails",
  storageBucket: "react-employeedetails.appspot.com",
  messagingSenderId: "550240670147",
  appId: "1:550240670147:web:6b6211dcd5312fa5d82d76",
  measurementId: "G-J73GC3E1QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);