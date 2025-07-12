// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx8d0iPvqm3JBXBcDQ2Dm9E8GMcrd4Kns",
  authDomain: "electric-vehicle-recharg-c1301.firebaseapp.com",
  projectId: "electric-vehicle-recharg-c1301",
  storageBucket: "electric-vehicle-recharg-c1301.firebasestorage.app",
  messagingSenderId: "704435779251",
  appId: "1:704435779251:web:9690130cffb1f436cc22c6",
  measurementId: "G-K1CJQTZX0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
