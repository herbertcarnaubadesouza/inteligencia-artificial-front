import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, doc, getDoc, where, query } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable, getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDEqZD1KEVWrHgCwHaxTsjATgpLUNy_zy4",
  authDomain: "midjourney-herbert.firebaseapp.com",
  projectId: "midjourney-herbert",
  storageBucket: "midjourney-herbert.appspot.com",
  messagingSenderId: "604950399632",
  appId: "1:604950399632:web:0b839013e1f5959553e615"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore()
const storage = getStorage(firebase);

export {
  firebase,
  db,
  storage,
  collection,
  addDoc,
  doc,
  getDoc,
  getDownloadURL,
  ref,
  query,
  where
}