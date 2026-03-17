// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFcDn505vtG1vk7KZHSSjqi2-Y4gIOp40",
  authDomain: "cprg306-assignments-10da9.firebaseapp.com",
  projectId: "cprg306-assignments-10da9",
  storageBucket: "cprg306-assignments-10da9.firebasestorage.app",
  messagingSenderId: "832831876150",
  appId: "1:832831876150:web:812ab4d61fa28cb9227c97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

export const githubProvider = new GithubAuthProvider();

export default app;