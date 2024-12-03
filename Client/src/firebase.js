// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-72083.firebaseapp.com",
  projectId: "mern-auth-72083",
  storageBucket: "mern-auth-72083.firebasestorage.app",
  messagingSenderId: "757535412640",
  appId: "1:757535412640:web:3d3a957c8fb01e5d1f94c5"
};

// Initialize Firebase  
export const app = initializeApp(firebaseConfig);