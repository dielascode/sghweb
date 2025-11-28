let galeriData = [];
let currentPage = 1;
const itemsPerPage = 9;

function loadGaleri() {
    fetch('/data/galeri.json')
        .then(res => res.json())
        .then(data => {
            galeriData = data;
            currentPage = 1; 
            renderGaleri();
            renderPagination();
        })
        .catch(err => console.error("Error loading galeri:", err));
}

function renderGaleri() {
    const container = document.getElementById('galeriContainer');
    if (!container) return;

    container.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const pageItems = galeriData.slice(start, end);

    pageItems.forEach(item => {
        container.innerHTML += `
            <div class="gallery-item">
                <img src="${item.image}" alt="images">
                <p class="caption">${item.caption}</p>
            </div>
        `;
    });
}

function renderPagination() {
    const pag = document.getElementById("pagination");
    if (!pag) return;

    pag.innerHTML = "";

    const totalPages = Math.ceil(galeriData.length / itemsPerPage);

    pag.innerHTML += `
        <button class="page-btn" ${currentPage === 1 ? "disabled" : ""} onclick="goToPage(${currentPage - 1})">Prev</button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        pag.innerHTML += `
            <button class="page-number ${currentPage === i ? "active" : ""}" onclick="goToPage(${i})">${i}</button>
        `;
    }

    pag.innerHTML += `
        <button class="page-btn" ${currentPage === totalPages ? "disabled" : ""} onclick="goToPage(${currentPage + 1})">Next</button>
    `;
}

function goToPage(page) {
    currentPage = page;
    renderGaleri();
    renderPagination();
}
