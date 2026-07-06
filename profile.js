// profile.js

import { db } from "./firebase.js";

import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Login झालेला मोबाईल नंबर
const mobile = localStorage.getItem("mobile");

if (!mobile) {
    alert("कृपया प्रथम Login करा.");
    window.location.href = "login.html";
}

async function loadProfile() {

    try {

        const q = query(
            collection(db, "users"),
            where("mobile", "==", mobile)
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            alert("प्रोफाइल सापडले नाही.");
            return;
        }

        const user = snapshot.docs[0].data();

        document.getElementById("name").textContent = user.name || "";
        document.getElementById("mobile").textContent = user.mobile || "";
        document.getElementById("age").textContent = user.age || "";
        document.getElementById("gender").textContent = user.gender || "";
        document.getElementById("district").textContent = user.district || "";
        document.getElementById("maritalStatus").textContent = user.maritalStatus || "";
        document.getElementById("education").textContent = user.education || "";
        document.getElementById("occupation").textContent = user.occupation || "";

        if (user.photo1) {
            document.getElementById("photo").src = user.photo1;
        }

    } catch (error) {
        console.error(error);
        alert("प्रोफाइल लोड करताना त्रुटी आली.");
    }

}

loadProfile();
