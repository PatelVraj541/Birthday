window.addEventListener('load', () => {
    // center burst
    confetti({
        particleCount: 100,
        spread: 90,
        origin: { x: 0.4 + Math.random() * 0.2, y: 0.6 },
        colors: ['#FF6B9D', '#FFC93C', '#6B4E71', '#FF9A76']
    });

    // side bursts, slightly delayed, for a fuller "pop"
    setTimeout(() => {
        confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1 } });
    }, 250);
});

function fallingFlakes() {
    for (let i = 0; i < 3; i++) {
        confetti({
            particleCount: 4,
            startVelocity: 2,
            angle: 270,
            spread: 60,
            ticks: 700,          // was 300 — gives them enough lifespan to reach the bottom
            gravity: 0.25,       // was 0.4 — slower, gentler fall
            origin: { x: Math.random(), y: -0.1 },
            colors: ['#FF6B9D', '#FFC93C', '#6B4E71', '#FF9A76'],
            shapes: ['circle'],
            scalar: 1.2
        });
    }
}
setInterval(fallingFlakes, 200);

const candle = document.getElementById('candle');
const smoke = document.getElementById('smoke');
const blowBtn = document.getElementById('blowBtn');
let blown = false;

blowBtn.addEventListener('click', () => {
    // candle + smoke animation only happens the first time
    if (!blown) {
        blown = true;
        candle.classList.add('blown');
        blowBtn.textContent = '🎉 Wish made!';
    }

    // smoke puff + confetti pop fire on every click
    smoke.classList.remove('show');
    void smoke.offsetWidth; // restart animation
    smoke.classList.add('show');

    confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#FF6B9D', '#FFC93C', '#6B4E71', '#FF9A76']
    });
});