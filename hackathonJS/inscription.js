let burger6 = document.querySelector('#burger6');
let menu6 = document.querySelector('#menu6');
let croix6 = document.querySelector('#croix6');
let deroulant16 = document.querySelector('#deroulant16');
let deroulant26 = document.querySelector('#deroulant26');
let derouler16 = document.querySelector('#derouler16');
let derouler26 = document.querySelector('#derouler26');

function toggleMenu() {
    console.log('toggleMenu called');
    menu6.classList.toggle('hidden');
    burger6.classList.toggle('hidden');
}

function toggleDerouler16() {
    console.log('toggleDerouler16 called');
    derouler16.classList.toggle('hidden');
}

function toggleDerouler26() {
    console.log('toggleDerouler26 called');
    derouler26.classList.toggle('hidden');
}

burger6.addEventListener('click', () => {
    console.log('burger6 clicked');
    toggleMenu();
});

croix6.addEventListener('click', () => {
    console.log('croix6 clicked');
    toggleMenu();
});

deroulant16.addEventListener('click', () => {
    console.log('deroulant16 clicked');
    toggleDerouler16();
});

deroulant26.addEventListener('click', () => {
    console.log('deroulant26 clicked');
    toggleDerouler26();
});