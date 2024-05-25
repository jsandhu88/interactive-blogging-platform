// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLdTxrX3fN3VL2Pj0LQsH_ODKiEy1DdSw",
  authDomain: "myblog-a4e7d.firebaseapp.com",
  projectId: "myblog-a4e7d",
  storageBucket: "myblog-a4e7d.appspot.com",
  messagingSenderId: "854201438045",
  appId: "1:854201438045:web:2fd3290312f8cf32a922b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}