const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const exit = document.getElementById('exit-btn')
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(exit) {
    exit.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

