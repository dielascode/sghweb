// function loadTestimoni() {
//     fetch('/data/testimoni.json')
//         .then(res => res.json())
//         .then(data => {
//             const container = document.getElementById('testimoniContainer');
//             container.innerHTML = "";

//             data.forEach(item => {
//                 container.innerHTML += `
//                     <div class="testimoni-card">
//                         <img src="${item.foto}" alt="">
//                         <p class="judul-testimoni">${item.nama} <br> ${item.jabatan}</p>
//                         <p>“${item.pesan}”</p>
//                     </div>
//                 `;
//             });
//         })
//         .catch(err => console.error("Error loading testimoni:", err));
// }

// loadTestimoni();
