

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAFQnhHNPEHsFNL0pCtCiBkUCvaQACGkvk",
    authDomain: "hacktx-541f9.firebaseapp.com",
    projectId: "hacktx-541f9",
    storageBucket: "hacktx-541f9.appspot.com",
    messagingSenderId: "688319346104",
    appId: "1:688319346104:web:a5ac2e7ba3571ced1e8b4d",
    measurementId: "G-MBW3DKV0GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);
export const storage = getStorage(app);