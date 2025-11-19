// Load Navbar
fetch("/components/pages/main.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("main").innerHTML = data;
    });
