document.addEventListener("DOMContentLoaded", function() {
    // Memanggil file navbar.html dari root domain (/)
    fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        // Memasukkan isi navbar.html ke dalam div penampung
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));
});

// Fungsi untuk mendeteksi scroll dan menambah class 'scrolled'
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav'); // Pastikan tag navbar kamu adalah <nav>
    if (window.scrollY > 50) { // Jika discroll lebih dari 50px
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
