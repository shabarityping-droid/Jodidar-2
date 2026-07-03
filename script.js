document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    button.addEventListener("click", function () {
        alert("Jodidar मध्ये आपले स्वागत आहे! कृपया नोंदणी करा.");
        window.location.href = "register.html";
    });

});
