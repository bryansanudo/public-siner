import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCV_TnBVtnY9F7kAESOpRycPvVl0ftUIZM",
  authDomain: "siner-5ff41.firebaseapp.com",
  projectId: "siner-5ff41",
  storageBucket: "siner-5ff41.appspot.com",
  messagingSenderId: "487795781959",
  appId: "1:487795781959:web:39094238350f9c3c321c62",
};

const appFirebase = initializeApp(firebaseConfig);

export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);
export const storage = getStorage(appFirebase);
