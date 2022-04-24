
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjdvKXDzAHe8gdmsOXOB-pQUSUPrYWZbE",
  authDomain: "countforkids.firebaseapp.com",
  databaseURL: "https://countforkids-default-rtdb.firebaseio.com",
  projectId: "countforkids",
  storageBucket: "countforkids.appspot.com",
  messagingSenderId: "468242371705",
  appId: "1:468242371705:web:027834c5eeb7646552f0a8",
  measurementId: "G-JVM77503T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);