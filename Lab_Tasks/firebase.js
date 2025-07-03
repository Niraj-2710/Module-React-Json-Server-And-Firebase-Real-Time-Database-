import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXUh3YmovnlgFW2mznQM40jr3xfgbVPqo",
  authDomain: "demofirebase-f12e0.firebaseapp.com",
  projectId: "demofirebase-f12e0",
  storageBucket: "demofirebase-f12e0.firebasestorage.app",
  messagingSenderId: "622330929085",
  appId: "1:622330929085:web:8eaf041527c6f02c7dbcd4",
  measurementId: "G-0XYHS92R0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {db}