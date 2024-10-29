import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAXUy2AAWcBFVu8h1JzDbJYWgXJJjX324M",
  authDomain: "notes-app-b9b9d.firebaseapp.com",
  projectId: "notes-app-b9b9d",
  storageBucket: "notes-app-b9b9d.appspot.com",
  messagingSenderId: "861748782102",
  appId: "1:861748782102:web:4122e6f620aa33168bc137"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')