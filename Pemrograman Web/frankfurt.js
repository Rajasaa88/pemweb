document.addEventListener("DOMContentLoaded", function() {

    const logo = document.querySelector("img");
    logo.addEventListener("click", function() {
        alert("Shalala Forza Sge Forza Sge");
    });

    const title = document.querySelector("h1");
    title.addEventListener("click", function() {
        title.style.color = title.style.color === "red" ? "black" : "red";
    });
});