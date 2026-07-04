// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKQVsvvx022jItJVLSBpiokzsfSE2v5gM",
  authDomain: "jodidar-3ea53.firebaseapp.com",
  projectId: "jodidar-3ea53",
  storageBucket: "jodidar-3ea53.firebasestorage.app",
  messagingSenderId: "1059717419145",
  appId: "1:1059717419145:web:ee77586d288c0d2853f658",
  measurementId: "G-SF5ESND7QX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
