import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDawJ1qy3kyyCHAzHvKePJIU58OhpYsNFI",
  authDomain: "chatapp-13f82.firebaseapp.com",
  projectId: "chatapp-13f82",
  storageBucket: "chatapp-13f82.appspot.com",
  messagingSenderId: "254645030510",
  appId: "1:254645030510:web:6810fba0593a11ea8ce07f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()