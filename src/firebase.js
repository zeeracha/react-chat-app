// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8nfpxZJd6hjnK5W4yiSkDH3VmNDssWic",
  authDomain: "react-chat-app-c03c4.firebaseapp.com",
  projectId: "react-chat-app-c03c4",
  storageBucket: "react-chat-app-c03c4.appspot.com",
  messagingSenderId: "707026802948",
  appId: "1:707026802948:web:afc8e2d90e876b16d7d851"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
