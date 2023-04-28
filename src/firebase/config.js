import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBFO1PNy9Q8QNgPi_lJxPtGl60dXpQ_mHo",
  authDomain: "thepeople-bbe44.firebaseapp.com",
  projectId: "thepeople-bbe44",
  storageBucket: "thepeople-bbe44.appspot.com",
  messagingSenderId: "781827147867",
  appId: "1:781827147867:web:109c62bddb8d051916177e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app