import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_lQ3q4rtQ8CL2GVc-uOvHj9Q0Aa7xKFM",
  authDomain: "multihojas-8d510.firebaseapp.com",
  projectId: "multihojas-8d510",
  storageBucket: "multihojas-8d510.appspot.com",
  messagingSenderId: "935277720250",
  appId: "1:935277720250:web:2956bfe6cc9bff9005c883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)