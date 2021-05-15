// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6thYpl-4Ee827BonqtE9mfAgvAHKMQfM",
  authDomain: "facebook-2-6eb19.firebaseapp.com",
  projectId: "facebook-2-6eb19",
  storageBucket: "facebook-2-6eb19.appspot.com",
  messagingSenderId: "148443188484",
  appId: "1:148443188484:web:d3a2698e685c6264361451",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
