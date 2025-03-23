document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        console.log("Form submit event triggered");

        const nama = form.elements["nama"].value.trim();
        const email = form.elements["email"].value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex validasi email

        if (nama === "") {
            alert("Nama tidak boleh kosong!");
            console.log("Nama kosong");
            event.preventDefault();
        } else if (nama.length > 20) {
            alert("Nama tidak boleh lebih dari 20 karakter!");
            console.log("Nama terlalu panjang");
            event.preventDefault();
        } else if (email === "") {
            alert("Email tidak boleh kosong!");
            console.log("Email kosong");
            event.preventDefault();
        } else if (!emailPattern.test(email)) {
            alert("Format email tidak valid!");
            console.log("Email format invalid");
            event.preventDefault();
        } else {
            alert("Pendaftaran berhasil! Selamat bergabung!");
            console.log("Validation passed");
        }
    });

    const button = form.querySelector("button");
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "#ff0000"; // Warna merah saat hover
    });
    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "";
    });

    button.addEventListener("mousedown", function() {
        button.style.transform = "scale(0.95)";
    });
    
    button.addEventListener("mouseup", function() {
        button.style.transform = "scale(1)";
    });
    
    button.addEventListener("mouseleave", function() {
        button.style.transform = "scale(1)";
    });
});
