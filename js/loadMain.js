loadPage("/components/pages/main.html");

function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;

            if (page.includes("galeri")) {
                loadGaleri();
            }
            if (page.includes("berita")) {
                loadBerita();
            }
            if (page.includes("produk")) {
                loadProduk();
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




// layanan-magang.html
// const observers = document.querySelectorAll('.fade-up, .slide-left, .slide-right, .slide-up');

// const options = {
//   threshold: 0.8
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('show');
//     }
//   });
// }, options);

// observers.forEach(el => observer.observe(el));

AOS.init({
    duration: 800,     // durasi animasi
    offset: 120,       // jarak scroll sebelum animasi mulai
    once: true,        // animasi muncul sekali saja
  });   
