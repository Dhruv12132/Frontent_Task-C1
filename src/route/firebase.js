
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAHrznZx7B9LFtPANN-SmF5SL8YlfLOWUA",
  authDomain: "sit313-myreactproject.firebaseapp.com",
  projectId: "sit313-myreactproject",
  storageBucket: "sit313-myreactproject.firebasestorage.app",
  messagingSenderId: "150413558242",
  appId: "1:150413558242:web:be764fbd65f90470b239bb",
  measurementId: "G-6FK7KSBEG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Firestore Database
export const db = getFirestore(app);