// ====================  Importing Necessary Files

// import Necessary files from APP
import {
    initializeApp
} from "firebase/app";

// import Necessary files from AUTH
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged,

} from 'firebase/auth'

// import Necessary files from FIRESTORE
import {
    getFirestore, doc,
    getDoc, setDoc,
    collection, writeBatch, query, getDocs
} from 'firebase/firestore'


// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwK21-lCUZCnO9qFIWODMsxRWeFeheFlc",
    authDomain: "crwn-db-d786a.firebaseapp.com",
    projectId: "crwn-db-d786a",
    storageBucket: "crwn-db-d786a.appspot.com",
    messagingSenderId: "681027007986",
    appId: "1:681027007986:web:ec843d927a e4dcc29da76b"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Configure Google Auth
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

const auth = getAuth();
const SignInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
const SignInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

// ========== Dealing With Database ==========

// Create DB
const db = getFirestore()


// Add SHOP DATA to Firestore
const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db)
    objectsToAdd.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase())
        batch.set(docRef, obj)
    });
    await batch.commit()
    console.log('done')
}

// Get FireStore Data
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,"categories")
    const q  = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=> {
        const {title , items} = docSnapshot.data()
        acc[title.toLowerCase()] = items;
        return acc; 
    }, {})
    return categoryMap
}


// Create User in DB
const createUserDocumentFromAuth = async (userAuth, additionalInforamtion = {}) => {
    /* 
        Create a Doc with Response
            from sign in with Google PopUp
    */

    if (!userAuth) return;
    const userDocRef = doc(db, 'users',
        userAuth.uid)

    const userSnapShot = await getDoc(userDocRef)

    /*
        ======= Our Methodology ======= 
        * If User Exists -> return User Data
        * If User doesn't exist -> Create in our collection
    */

    // If User doesn't exist
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInforamtion
            })
        } catch (err) {
            console.log('Error Creating a User', err.message)
        }
    }

    // If User exists
    return userDocRef;

}

const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

const signAuthWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

const signOutUser = async () => await signOut(auth)

const onAuthStateChangedListner = (callback) =>
    onAuthStateChanged(auth, callback)

// Exporting The Methods
export {
    auth, SignInWithGooglePopup
    , db, createUserDocumentFromAuth, SignInWithGoogleRedirect,
    createAuthUserWithEmailAndPassword, signAuthWithEmailAndPassword,
    signOutUser, onAuthStateChangedListner,addCollectionsAndDocuments
}