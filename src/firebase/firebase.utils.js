import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDvD4h60ccqudjPwCe-6Uvb1X70zxsV0Ew",
  authDomain: "ecommerce-db-5c46a.firebaseapp.com",
  databaseURL: "https://ecommerce-db-5c46a.firebaseio.com",
  projectId: "ecommerce-db-5c46a",
  storageBucket: "ecommerce-db-5c46a.appspot.com",
  messagingSenderId: "25601854204",
  appId: "1:25601854204:web:00e84f876da284b554a579",
  measurementId: "G-F6XZXH2B32",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
