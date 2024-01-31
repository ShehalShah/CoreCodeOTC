// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARqStBVHusYUzr4uY5uN17124r2zz3ml0",
  authDomain: "tsec-a5ded.firebaseapp.com",
  projectId: "tsec-a5ded",
  storageBucket: "tsec-a5ded.appspot.com",
  messagingSenderId: "145489514018",
  appId: "1:145489514018:web:f001ad95cba425ddcc447b",
  measurementId: "G-WJDEX1WPSZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

export { auth, database, storage };
