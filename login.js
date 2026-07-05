import { db } from "./firebase.js";
import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.loginUser = async function () {

    const customerId = document.getElementById("customerId").value.trim();
    const mobile = document.getElementById("mobile").value.trim();

    if (customerId === "" || mobile === "") {
        alert("Customer ID आणि Mobile Number भरा.");
        return;
    }

    try {

        const q = query(
            collection(db, "users"),
            where("customerId", "==", customerId),
            where("mobile", "==", mobile)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            alert("Customer ID किंवा Mobile Number चुकीचा आहे.");
            return;
        }

        const user = querySnapshot.docs[0].data();

        if (user.approved === false) {
            alert("तुमचे प्रोफाइल Admin Approval साठी प्रलंबित आहे.");
            return;
        }

        localStorage.setItem("customerId", user.customerId);
        localStorage.setItem("mobile", user.mobile);
        localStorage.setItem("name", user.fullName);

        alert("Login Successful");

        window.location.href = "home.html";

    } catch (error) {

        console.error(error);

        alert("Login Failed. पुन्हा प्रयत्न करा.");

    }

};
