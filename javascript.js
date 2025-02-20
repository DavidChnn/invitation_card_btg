function startCountdown() {
    // Atur target waktu: 23 Februari 2025, pukul 18:30
    const targetDate = new Date("February 23, 2025 18:30:00").getTime();

    // Update countdown setiap detik
    const interval = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.querySelector(".countdown").innerHTML = "Countdown Selesai!";
            clearInterval(interval);
            return;
        }

        // Hitung hari, jam, menit, dan detik
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Tampilkan hasil
        document.querySelector(".countdown").innerHTML = 
            `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }, 1000);
}

// Jalankan countdown saat halaman dimuat
startCountdown();