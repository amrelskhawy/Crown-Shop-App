// Importing Necessary Files

import {
    initializeApp
} from "firebase/app";
import {
getAuth,
signInWithRedirect,
signInWithPopup ,
GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore, doc ,
    getDoc , setDoc
} from 'firebase/firestore'


// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwK21-lCUZCnO9qFIWODMsxRWeFeheFlc",
    authDomain: "crwn-db-d786a.firebaseapp.com",
    projectId: "crwn-db-d786a",
    storageBucket: "crwn-db-d786a.appspot.com",
    messagingSenderId: "681027007986",
    appId: "1:681027007986:web:ec843d927ae4dcc29da76b"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Configure Google Auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

const auth = getAuth();
const SignInWithGooglePopup = () => signInWithPopup(auth,provider)

// ========== Dealing With Database ==========

// Create DB
const db = getFirestore()

// Create User in DB
const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'users',
        userAuth.uid)
    console.log(userDocRef)
}

// Exporting The Methods
export { auth, SignInWithGooglePopup
    , db , createUserDocumentFromAuth}