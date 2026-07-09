
import { db } from "./firebase-config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const profileId = localStorage.getItem("profileId");

if (!profileId) {
    alert("प्रोफाइल सापडले नाही.");
    window.location.href = "register.html";
}

const userRef = ref(db, "users/" + profileId);

get(userRef).then((snapshot) => {

    if (!snapshot.exists()) {
        alert("डेटा मिळाला नाही.");
        return;
    }

    const user = snapshot.val();

    document.getElementById("photo").src = user.photo || "";
    document.getElementById("name").innerText = user.name || "";
    document.getElementById("age").innerText = user.age || "";
    document.getElementById("gender").innerText = user.gender || "";
    document.getElementById("mobile").innerText = user.mobile || "";
    document.getElementById("village").innerText = user.village || "";
    document.getElementById("taluka").innerText = user.taluka || "";
    document.getElementById("district").innerText = user.district || "";
    document.getElementById("education").innerText = user.education || "";
    document.getElementById("occupation").innerText = user.occupation || "";
    document.getElementById("about").innerText = user.about || "";

}).catch((error) => {
    console.error(error);
    alert("डेटा लोड करताना त्रुटी आली.");
});
