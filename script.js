// Fungsi untuk tombol WhatsApp
function orderViaWA(product) {
    const message = `Halo ABI Hosting, saya mau order ${product}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/62895385838250?text=${encodedMessage}`, '_blank');
}

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});