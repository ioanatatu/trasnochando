import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// config object
import config from "../config/firebase";

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google
const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({ prompt: "select_account" });

// Facebook
const providerFacebook = new firebase.auth.FacebookAuthProvider();
providerFacebook.setCustomParameters({
    display: "popup",
});

export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook);

export default firebase;
