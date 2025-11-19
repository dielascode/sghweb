// Load Navbar
fetch("/components/pages/main.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("main").innerHTML = data;
    });


const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

