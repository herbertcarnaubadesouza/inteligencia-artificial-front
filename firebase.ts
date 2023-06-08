// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6-M1QPUz32QE61LKzwlbehQ-qRc4Fp-I",
  authDomain: "sitesbuilder-b3321.firebaseapp.com",
  projectId: "sitesbuilder-b3321",
  storageBucket: "sitesbuilder-b3321.appspot.com",
  messagingSenderId: "449135339666",
  appId: "1:449135339666:web:137ca72fa3674f53bc9e4b",
  measurementId: "G-W2T4XPM6KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const analytics = getAnalytics(app);