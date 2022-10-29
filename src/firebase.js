import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD1aytmcs7goCmC5h-uz7ShbhW6tJ7dT-c",
  authDomain: "react-firebase-d03c6.firebaseapp.com",
  projectId: "react-firebase-d03c6",
  storageBucket: "react-firebase-d03c6.appspot.com",
  messagingSenderId: "411365302406",
  appId: "1:411365302406:web:601cd1c41b8a1ff164f107",
  measurementId: "G-2T7ECJ6P0R",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
