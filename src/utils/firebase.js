// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDflkF5c3SanxQyuK83uAVyWFvpNgB00WY",
  authDomain: "netflix-gpt-8ccac.firebaseapp.com",
  projectId: "netflix-gpt-8ccac",
  storageBucket: "netflix-gpt-8ccac.firebasestorage.app",
  messagingSenderId: "941377820374",
  appId: "1:941377820374:web:31998e193697ed372fdb77",
  measurementId: "G-GB4XQHGV7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();