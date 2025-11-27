// Load Navbar
fetch("./components/top_bottom/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

// Load Footer
fetch("/components/top_bottom/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });


    document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item').forEach(function(el){
        el.addEventListener('click', function () {
            var navbar = document.querySelector('.navbar-collapse');
            var bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
            bsCollapse.hide();
        });
    });

