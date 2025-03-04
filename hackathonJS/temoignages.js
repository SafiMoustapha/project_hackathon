let burger4 = document.querySelector('#burger4');
let menu4 = document.querySelector('#menu4');
let croix4 = document.querySelector('#croix4');
let deroulant14 = document.querySelector('#deroulant14');
let deroulant24 = document.querySelector('#deroulant24');
let derouler14 = document.querySelector('#derouler14');
let derouler24 = document.querySelector('#derouler24');

function toggleMenu() {
    console.log('toggleMenu called');
    menu4.classList.toggle('hidden');
    burger4.classList.toggle('hidden');
}

function toggleDerouler12() {
    console.log('toggleDerouler14 called');
    derouler14.classList.toggle('hidden');
}

function toggleDerouler24() {
    console.log('toggleDerouler24 called');
    derouler24.classList.toggle('hidden');
}

burger4.addEventListener('click', () => {
    console.log('burger4 clicked');
    toggleMenu();
});

croix4.addEventListener('click', () => {
    console.log('croix4 clicked');
    toggleMenu();
});

deroulant14.addEventListener('click', () => {
    console.log('deroulant14 clicked');
    toggleDerouler14();
});

deroulant24.addEventListener('click', () => {
    console.log('deroulant24 clicked');
    toggleDerouler24();
});