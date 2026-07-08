import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKQVsvvx022jItJVLSBpiokzsfSE2v5gM",
  authDomain: "jodidar-3ea53.firebaseapp.com",
  databaseURL: "https://jodidar-3ea53-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jodidar-3ea53",
  storageBucket: "jodidar-3ea53.firebasestorage.app",
  messagingSenderId: "1059717419145",
  appId: "1:1059717419145:web:d44b6a53c8d4458853f658",
  measurementId: "G-D7ZE8FLWC5"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const storage = getStorage(app);

export { app, db, storage };
