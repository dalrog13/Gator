import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGinAAFblpClpKTh1_EIgALCaTOHQXAC4",
    authDomain: "gator-90b16.firebaseapp.com",
    databaseURL: "https://gator-90b16.firebaseio.com",
    projectId: "gator-90b16",
    storageBucket: "gator-90b16.appspot.com",
    messagingSenderId: "418587105772",
    appId: "1:418587105772:web:cb0bba38110d344b79c8c9",
    measurementId: "G-7MC1PKSMJ3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;