loadPage("/components/pages/hubungi.html");

function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

