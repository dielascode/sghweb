loadPage("/components/pages/main.html");

function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;

            if (page.includes("/components/pages/main.html")) {
                loadTestimoni();
            }
            if (page.includes("galeri")) {
                loadGaleri();
            }
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


document.addEventListener("DOMContentLoaded", function () {

    // Ambil semua tombol selengkapnya
    const buttons = document.querySelectorAll('.news-button');

    // Popup
    const popup = document.getElementById('popup-detail-berita');
    const popupImg = document.getElementById('popup-detail-berita-img');
    const popupDesc = document.getElementById('popup-detail-berita-desc');

    if (!popup) {
        console.error("Popup dengan id 'popup-detail-berita' tidak ditemukan.");
        return;
    }

    // Event tiap tombol
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const card = this.closest('.news-card');
            const imgSrc = card.querySelector('.news-image').src;
            const title = card.querySelector('.news-title').innerText;
            const desc = card.querySelector('.news-description').innerText;

            popupImg.src = imgSrc;
            popupDesc.innerHTML = `<strong>${title}</strong><br><br>${desc}`;

            popup.style.display = "flex";
        });
    });

    // Tutup jika klik di luar box
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            tutupPopup();
        }
    });

});

// Fungsi tutup popup global
function tutupPopup() {
    document.getElementById('popup-detail-berita').style.display = "none";
}


function sendToWA(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    const text = `Halo, saya ${nama}%0AEmail: ${email}%0APesan:%0A${pesan}`;
    const nomor = "6285732444518"; 

    window.open(`https://wa.me/${nomor}?text=${text}`);
}