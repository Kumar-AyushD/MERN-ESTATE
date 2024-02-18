// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-50ee1.firebaseapp.com",
  projectId: "mern-estate-50ee1",
  storageBucket: "mern-estate-50ee1.appspot.com",
  messagingSenderId: "478528224850",
  appId: "1:478528224850:web:a02471847b771e0ee4698b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);