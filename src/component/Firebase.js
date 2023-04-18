import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaqOWaty1-fl8FRkRE_2K-FdLsvLu38Ko",
  authDomain: "react-chat-c7771.firebaseapp.com",
  projectId: "react-chat-c7771",
  storageBucket: "react-chat-c7771.appspot.com",
  messagingSenderId: "116200785746",
  appId: "1:116200785746:web:9af0af34aa161dec825c8b"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
