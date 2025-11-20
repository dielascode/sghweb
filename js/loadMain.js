loadPage("/components/pages/galeri.html");

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

function openPopup(nama, harga, desc, img) {
    document.getElementById("popup-nama").innerText = nama;
    document.getElementById("popup-harga").innerText = harga;
    document.getElementById("popup-desc").innerText = desc;
    document.getElementById("popup-img").src = img;

    document.getElementById("popup-produk").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-produk").style.display = "none";
}
