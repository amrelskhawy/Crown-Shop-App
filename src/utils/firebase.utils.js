// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth"

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmh1ctBEnQ0fcEdPjbT5_GqX9lFquVEyU",
  authDomain: "crown-clothing-db-2.firebaseapp.com",
  projectId: "crown-clothing-db-2",
  storageBucket: "crown-clothing-db-2.appspot.com",
  messagingSenderId: "737736722014",
  appId: "1:737736722014:web:2b47e3fd84880a328656cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db,
    'users', userAuth.uid)

  const userSnapShot = await getDoc(userDocRef)

  // If User does not exist
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })

    } catch ( error ) {
      console.log("Error Creating User", error.message)
    }
  }

  // if user exists
  return  userDocRef
}













