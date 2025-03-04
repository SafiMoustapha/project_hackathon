let burger5 = document.querySelector('#burger5');
let menu5 = document.querySelector('#menu5');
let croix5 = document.querySelector('#croix5');
let deroulant15 = document.querySelector('#deroulant15');
let deroulant25 = document.querySelector('#deroulant25');
let derouler15 = document.querySelector('#derouler15');
let derouler25 = document.querySelector('#derouler25');

function toggleMenu() {
    console.log('toggleMenu called');
    menu5.classList.toggle('hidden');
    burger5.classList.toggle('hidden');
}

function toggleDerouler15() {
    console.log('toggleDerouler15 called');
    derouler15.classList.toggle('hidden');
}

function toggleDerouler25() {
    console.log('toggleDerouler25 called');
    derouler25.classList.toggle('hidden');
}

burger5.addEventListener('click', () => {
    console.log('burger5 clicked');
    toggleMenu();
});

croix5.addEventListener('click', () => {
    console.log('croix5 clicked');
    toggleMenu();
});

deroulant15.addEventListener('click', () => {
    console.log('deroulant15 clicked');
    toggleDerouler15();
});

deroulant25.addEventListener('click', () => {
    console.log('deroulant25 clicked');
    toggleDerouler25();
});