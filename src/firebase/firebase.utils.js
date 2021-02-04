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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
