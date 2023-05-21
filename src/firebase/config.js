import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcmuKxZooPTXy4KSGZTQj4Nh5smOjPwzI",
  authDomain: "olx-clone-de2f5.firebaseapp.com",
  projectId: "olx-clone-de2f5",
  storageBucket: "gs://olx-clone-de2f5.appspot.com/",
  messagingSenderId: "315808856894",
  appId: "1:315808856894:web:ee9bc7a7727b8d65c88a6f",
  measurementId: "G-WN42X1EJNY",
};
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const storage = getStorage(app);
export const auth = getAuth(app);
export { db };
