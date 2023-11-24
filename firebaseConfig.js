// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// apiKey: Public API key to interact with Firebase services
// authDomain: URL used for user authentication services
// projectId: Project ID for your Firebase application
// storageBucket: URL for file storage within your application
// messagingSenderId: Sender ID for sending messages via Firebase Cloud Messaging
// appId: Application ID for the Firebase app, it is unique to this application

// Declare Firebase Environment Variables  
const firebaseConfig = {
    apiKey: "AIzaSyBbXa_8OSOL7YclcoZwlroY9UO8-mTGTGE",
    authDomain: "fir-todo-8b2a8.firebaseapp.com",
    projectId: "fir-todo-8b2a8",
    storageBucket: "fir-todo-8b2a8.appspot.com",
    messagingSenderId: "445750470727",
    appId: "1:445750470727:web:2a9c307bd80794d23ca962",
    measurementId: "G-EZKYQCNS6B"
  };

// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
