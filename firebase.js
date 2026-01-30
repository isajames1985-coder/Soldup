import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB28_K8By5CH6OxsUA7J1No735SR4sm9j0",
  authDomain: "soldup-e23cc.firebaseapp.com",
  projectId: "soldup-e23cc",
  storageBucket: "soldup-e23cc.firebasestorage.app",
  messagingSenderId: "741882247914",
  appId: "1:741882247914:web:febe3c81ddab12721db593"
};

// Initialisation Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
