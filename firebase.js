// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: "instagram-7e2c7.firebaseapp.com",
	projectId: "instagram-7e2c7",
	storageBucket: "instagram-7e2c7.appspot.com",
	messagingSenderId: "451375965862",
	appId: "1:451375965862:web:9bca67a4731b89f3d13667",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
