let burger3 = document.querySelector('#burger3');
let menu3 = document.querySelector('#menu3');
let croix3 = document.querySelector('#croix3');
let deroulant13 = document.querySelector('#deroulant13');
let deroulant23 = document.querySelector('#deroulant23');
let derouler13 = document.querySelector('#derouler13');
let derouler23 = document.querySelector('#derouler23');

function toggleMenu() {
    console.log('toggleMenu called');
    menu3.classList.toggle('hidden');
    burger3.classList.toggle('hidden');
}

function toggleDerouler13() {
    console.log('toggleDerouler1 called');
    derouler13.classList.toggle('hidden');
}

function toggleDerouler23() {
    console.log('toggleDerouler2 called');
    derouler23.classList.toggle('hidden');
}

burger3.addEventListener('click', () => {
    console.log('burger clicked');
    toggleMenu();
});

croix3.addEventListener('click', () => {
    console.log('croix clicked');
    toggleMenu();
});

deroulant13.addEventListener('click', () => {
    console.log('deroulant1 clicked');
    toggleDerouler13();
});

deroulant23.addEventListener('click', () => {
    console.log('deroulant2 clicked');
    toggleDerouler23();
});

// Simuler des données (peut être remplacé par des données dynamiques)
const totalAvis = 125;
const moyenneNote = 4.2;
const avisParNote = [10, 15, 20, 35, 45]; // Nombre d'avis pour chaque note (1 à 5)
const problemes = ["Attente", "Accueil", "Propreté", "Manque de matériel", "Autres"];
const problemesSignalés = [40, 25, 20, 15, 10];

// Mettre à jour les valeurs des statistiques
document.getElementById("total-avis").textContent = totalAvis;
document.getElementById("moyenne-note").textContent = moyenneNote.toFixed(1);

// Graphique Satisfaction
new Chart(document.getElementById("chartSatisfaction"), {
    type: "bar",
    data: {
        labels: ["1 étoile", "2 étoiles", "3 étoiles", "4 étoiles", "5 étoiles"],
        datasets: [{
            label: "Nombre d'avis",
            data: avisParNote,
            backgroundColor: ["#87CEEB", "#00FFFF", "#40E0D0", "#7FFFD4", "#D4F1F9"]
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});

// Graphique Problèmes Signalés
new Chart(document.getElementById("chartProblemes"), {
    type: "doughnut",
    data: {
        labels: problemes,
        datasets: [{
            data: problemesSignalés,
            backgroundColor: ["#87CEEB", "#00FFFF", "#40E0D0", "#7FFFD4", "#D4F1F9"]
        }]
    },
    options: {
        responsive: true
    }
});