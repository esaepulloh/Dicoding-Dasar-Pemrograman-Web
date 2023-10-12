// Ambil elemen-elemen yang diperlukan
const ctaButtons = document.querySelectorAll('.cta-button');

// Tambahkan event listener untuk tombol-tombol CTA
ctaButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Anda akan diarahkan ke halaman pemesanan. Silakan lanjutkan.');
    });
});

// Ambil semua elemen menu berdasarkan ID
const berandaLink = document.getElementById('beranda-link');
const paketLink = document.getElementById('paket-link');
const testimoniLink = document.getElementById('testimoni-link');
const kontakLink = document.getElementById('kontak-link');

// Tambahkan event listener ke semua elemen menu
berandaLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Ganti warna background ketika "Beranda" diklik
    berandaLink.style.backgroundColor = '#96BDC9'; // Ganti warna dengan warna background yang di inginkan
    window.location.href = '#beranda'
    // Reset warna teks elemen menu lainnya
    paketLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
    testimoniLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
    kontakLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
});

paketLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Ganti warna teks ketika "Paket Umroh" diklik
    paketLink.style.backgroundColor = '#96BDC9'; // Ganti warna dengan warna background yang di inginkan
    window.location.href = '#paket'
    // Reset warna teks elemen menu lainnya
    berandaLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
    testimoniLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
    kontakLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
});

testimoniLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Ganti warna teks ketika "Testimoni" diklik
    testimoniLink.style.backgroundColor = '#96BDC9'; // GGanti warna dengan warna background yang di inginkan
    window.location.href = '#testimoni'
    // Reset warna teks elemen menu lainnya
    berandaLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
    paketLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
    kontakLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
});

kontakLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Ganti warna teks ketika "Kontak" diklik
    kontakLink.style.backgroundColor = '#96BDC9'; // Ganti warna dengan warna background yang di inginkan
    window.location.href = '#kontak'
    // Reset warna teks elemen menu lainnya
    berandaLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
    paketLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
    testimoniLink.style.backgroundColor = ''; // Ganti warna dengan warna aslinya
});

