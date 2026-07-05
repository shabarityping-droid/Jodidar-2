// home.js

import { auth, db } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const nameEl = document.getElementById("name");
const customerIdEl = document.getElementById("customerId");
const mobileEl = document.getElementById("mobile");

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    try {

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            const data = docSnap.data();

            nameEl.textContent = data.name || "";
            customerIdEl.textContent = data.customerId || "";
            mobileEl.textContent = data.mobile || "";

        } else {

            nameEl.textContent = "डेटा मिळाला नाही";
        }

    } catch (e) {

        console.log(e);
    }

});

document.getElementById("logoutBtn").addEventListener("click", async () => {

    await signOut(auth);
    window.location.href = "login.html";

});
