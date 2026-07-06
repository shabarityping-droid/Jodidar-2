import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKQVsvvx022jItJVLSBpiokzsfSE2v5gM",
  authDomain: "jodidar-3ea53.firebaseapp.com",
  databaseURL: "https://jodidar-3ea53-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jodidar-3ea53",
  storageBucket: "jodidar-3ea53.appspot.com",
  messagingSenderId: "600366818775",
  appId: "1:600366818775:web:96c942e8154c2b9cf522bf"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const storage = getStorage(app);

export { app, database, storage };
