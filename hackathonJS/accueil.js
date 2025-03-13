let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');
let croix = document.querySelector('#croix');
let deroulant1 = document.querySelector('#deroulant1');
let deroulant2 = document.querySelector('#deroulant2');
let derouler1 = document.querySelector('#derouler1');
let derouler2 = document.querySelector('#derouler2');
let sonAvis = document.querySelector('#sonAvis');

function toggleMenu() {
    console.log('toggleMenu called');
    menu.classList.toggle('hidden');
    burger.classList.toggle('hidden');
}

function toggleDerouler1() {
    console.log('toggleDerouler1 called');
    derouler1.classList.toggle('hidden');
}

function toggleDerouler2() {
    console.log('toggleDerouler2 called');
    derouler2.classList.toggle('hidden');
}

function toggleSonAvis() {
    console.log('toggleSonAvis called');
    window.location.href = "./hackathonHTML/sonAvis.html";
}

burger.addEventListener('click', () => {
    console.log('burger clicked');
    toggleMenu();
});

croix.addEventListener('click', () => {
    console.log('croix clicked');
    toggleMenu();
});

deroulant1.addEventListener('click', () => {
    console.log('deroulant1 clicked');
    toggleDerouler1();
});

deroulant2.addEventListener('click', () => {
    console.log('deroulant2 clicked');
    toggleDerouler2();
});

sonAvis.addEventListener('click', () => {
    console.log('sonAvis clicked');
    toggleSonAvis();
});

function goToDashboard() {
    window.location.href = "dashboard.html"; // Redirige vers le tableau de bord
  }