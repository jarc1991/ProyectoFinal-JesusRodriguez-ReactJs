// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjvZOaPmfcZK-gt5E9I8jPOwPDgXDXrwE",
  authDomain: "adelestore-f9b61.firebaseapp.com",
  projectId: "adelestore-f9b61",
  storageBucket: "adelestore-f9b61.appspot.com",
  messagingSenderId: "771724392810",
  appId: "1:771724392810:web:b3c2787d019fcfc55c0d13",
  measurementId: "G-DH659JB36B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)