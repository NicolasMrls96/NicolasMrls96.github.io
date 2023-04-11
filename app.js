const caja = document.getElementById('caja');
const no = document.getElementById('no');

no.addEventListener('mouseover', () => {
    const width = window.innerWidth - caja.clientWidth;
    const height = window.innerHeight - caja.clientHeight;
    const left = Math.floor(Math.random() * width);
    const top = Math.floor(Math.random() * height);
    caja.style.left = left + 'px';
    caja.style.top = top + 'px';
});

const si = document.getElementById('si');
si.addEventListener('click', () => {
    alert('Esooo! 🥳 ¡Vamos a comer amborguesa!');
});
