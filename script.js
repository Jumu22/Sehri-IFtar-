function updateCountdown() {
    const iftarTime = new Date('March 12, 2025 17:56:00').getTime(); // প্রথম দিনের ইফতারের সময়
    const now = new Date().getTime();
    const distance = iftarTime - now;

    if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('time').innerHTML = hours + ' ঘন্টা ' + minutes + ' মিনিট ' + seconds + ' সেকেন্ড ';
    } else {
        document.getElementById('time').innerHTML = 'ইফতারের সময় হয়ে গেছে!';
    }
}

setInterval(updateCountdown, 1000);
