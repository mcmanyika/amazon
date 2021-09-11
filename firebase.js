import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDFAtHLqJz4xlzukcE8d11ezOPEpkPbsBg",
    authDomain: "amzn-2-7163d.firebaseapp.com",
    projectId: "amzn-2-7163d",
    storageBucket: "amzn-2-7163d.appspot.com",
    messagingSenderId: "97367545170",
    appId: "1:97367545170:web:9edf34f7d02e43a6d4568b"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;