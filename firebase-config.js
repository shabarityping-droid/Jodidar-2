// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQHHE13uINqdI6QDku_A12sXiWCNHr4zY",
  authDomain: "jodidar-4d459.firebaseapp.com",
  projectId: "jodidar-4d459",
  storageBucket: "jodidar-4d459.firebasestorage.app",
  messagingSenderId: "830505929963",
  appId: "1:830505929963:web:8d351ca484b5257a1042ae",
  measurementId: "G-C5SDLFPJZ9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
