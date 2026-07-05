// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// तुमचा Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "jodidar-3ea53.firebaseapp.com",
  projectId: "jodidar-3ea53",
  storageBucket: "jodidar-3ea53.firebasestorage.app",
  messagingSenderId: "1059717419145",
  appId: "YOUR_APP_ID"
};

// Firebase सुरू करा
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Export
export { db };
