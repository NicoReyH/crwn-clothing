import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOK3yLYQeBVt9Yct7SzK3cK7JySfNC8UI",
  authDomain: "crwn-db-78b90.firebaseapp.com",
  projectId: "crwn-db-78b90",
  storageBucket: "crwn-db-78b90.appspot.com",
  messagingSenderId: "941062991916",
  appId: "1:941062991916:web:4f4bf1c4c85cc92575a189",
  measurementId: "G-V26EHR6XY5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
