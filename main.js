document.addEventListener("DOMContentLoaded", function() {
const popup = document.getElementById('migrationPopup');
    const closeBtn = document.getElementById('closePopupBtn');
    
    // Cek di Local Storage apakah user sudah pernah menekan tombol OK
    if (!localStorage.getItem('moonlightbay_migrated_ok')) {
        // Beri delay 1 detik setelah web selesai dimuat agar transisi terlihat elegan
        setTimeout(() => {
            popup.classList.add('show');
        }, 1000);
    }

    // Fungsi saat tombol ditekkan
    closeBtn.addEventListener('click', function() {
        // Hilangkan pop-up
        popup.classList.remove('show');
        
        // Simpan data di browser pengguna agar tidak muncul lagi besok-besok
        localStorage.setItem('moonlightbay_migrated_ok', 'true');
    });
});
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
