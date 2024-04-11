import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5lSYA4cygHkq6FWWuDgl_d-_vJKejDNk",
  authDomain: "vcpmc-c519f.firebaseapp.com",
  projectId: "vcpmc-c519f",
  storageBucket: "vcpmc-c519f.appspot.com",
  messagingSenderId: "354977566176",
  appId: "1:354977566176:web:39bb0d389fd7365cdb2f85",
  measurementId: "G-EZ12WQMXRP"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);