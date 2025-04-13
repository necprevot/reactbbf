// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-aPZ6MBrSrWmBk78HdrO45et4OCnukWg",
  authDomain: "pruebasbbf.firebaseapp.com",
  projectId: "pruebasbbf",
  storageBucket: "pruebasbbf.firebasestorage.app",
  messagingSenderId: "52304386756",
  appId: "1:52304386756:web:2a0b55cb13712340508791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)