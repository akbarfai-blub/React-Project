import firebase from "./firebase";
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1aytmcs7goCmC5h-uz7ShbhW6tJ7dT-c",

  authDomain: "react-firebase-d03c6.firebaseapp.com",

  projectId: "react-firebase-d03c6",

  storageBucket: "react-firebase-d03c6.appspot.com",

  messagingSenderId: "411365302406",

  appId: "1:411365302406:web:601cd1c41b8a1ff164f107",

  measurementId: "G-2T7ECJ6P0R",
});

var db = firebaseApp.firestore();

export default { db };
