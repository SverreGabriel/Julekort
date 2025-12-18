const btn = document.getElementById('christmas-button');
const container = document.getElementById('surprise');

btn.addEventListener('click', () => {
    for (let i =0; i <600; i++){
        const sparks = document.createElement('div');
        sparks.className = 'firework';

        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 500;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        sparks.style.setProperty('--fx', x);
        sparks.style.setProperty('--fy', y);
        sparks.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;

        sparks.style.left = '50%';
        sparks.style.top = '50%';

        container.appendChild(sparks);

        setTimeout(() => sparks.remove(), 1000)
    }
})