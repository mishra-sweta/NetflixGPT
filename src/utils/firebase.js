// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXo-sNceNb8St7ccWFzoavIhuyG8m2Snk",
  authDomain: "netflixgpt-85a37.firebaseapp.com",
  projectId: "netflixgpt-85a37",
  storageBucket: "netflixgpt-85a37.firebasestorage.app",
  messagingSenderId: "783766414715",
  appId: "1:783766414715:web:d301b501988586693f49de",
  measurementId: "G-JRE028H22P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
