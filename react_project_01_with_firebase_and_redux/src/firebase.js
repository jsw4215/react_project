// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuMMhCXMjmbhG7Go9m6fwqFAqCyVAuX_o",
  authDomain: "spartareactweek1.firebaseapp.com",
  projectId: "spartareactweek1",
  storageBucket: "spartareactweek1.appspot.com",
  messagingSenderId: "1048136848254",
  appId: "1:1048136848254:web:e93f225b3c7a9da165992f",
  measurementId: "G-LBTVQMPRNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();