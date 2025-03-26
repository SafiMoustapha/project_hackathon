let burger2 = document.querySelector('#burger2');
let menu2 = document.querySelector('#menu2');
let croix2 = document.querySelector('#croix2');
let deroulant12 = document.querySelector('#deroulant12');
let deroulant22 = document.querySelector('#deroulant22');
let derouler12 = document.querySelector('#derouler12');
let derouler22 = document.querySelector('#derouler22');

const API_URL = "https://backendhackathon-production.up.railway.app/api/hospitals";

function toggleMenu() {
    console.log('toggleMenu called');
    menu2.classList.toggle('hidden');
    burger2.classList.toggle('hidden');
}

function toggleDerouler12() {
    console.log('toggleDerouler12 called');
    derouler12.classList.toggle('hidden');
}

function toggleDerouler22() {
    console.log('toggleDerouler22 called');
    derouler22.classList.toggle('hidden');
}

burger2.addEventListener('click', () => {
    console.log('burger2 clicked');
    toggleMenu();
});

croix2.addEventListener('click', () => {
    console.log('croix2 clicked');
    toggleMenu();
});

deroulant12.addEventListener('click', () => {
    console.log('deroulant12 clicked');
    toggleDerouler12();
});

deroulant22.addEventListener('click', () => {
    console.log('deroulant22 clicked');
    toggleDerouler22();
});


// Récupérer l'élément du champ de recherche et de la liste des suggestions
const searchHospitalInput = document.getElementById('searchHospital');
const hospitalSuggestionsList = document.getElementById('hospitalSuggestions');

// Fonction pour récupérer les hôpitaux en fonction de la recherche
async function searchHospitals(query) {
    try {
        const response = await fetch(`${API_URL}?query=${query}`); // Requête API
        const data = await response.json();

        console.log("Données reçues :", data); // Affiche les données dans la console

        if (data.success) {
            displayHospitalSuggestions(data.hospitals);
        } else {
            console.error('Erreur lors de la recherche des hôpitaux');
        }
    } catch (error) {
        console.error('Erreur de connexion:', error);
    }
}


// Fonction pour afficher les suggestions d'hôpitaux
function displayHospitalSuggestions(hospitals) {
    console.log("Suggestions générées:", hospitals); // Vérifier si les hôpitaux sont affichés

    hospitalSuggestionsList.innerHTML = ''; // Vider la liste actuelle

    if (hospitals.length > 0) {
        hospitalSuggestionsList.classList.remove('hidden'); // Afficher la liste
        hospitals.forEach(hospital => {
            const li = document.createElement('li');
            li.textContent = hospital.name;
            li.classList.add('py-2', 'px-4', 'cursor-pointer', 'bg-gray-100', 'hover:bg-gray-200');
            li.addEventListener('click', () => selectHospital(hospital));
            hospitalSuggestionsList.appendChild(li);
        });
    } else {
        hospitalSuggestionsList.classList.add('hidden'); // Masquer la liste si vide
    }
}


// Fonction pour sélectionner un hôpital dans la liste
function selectHospital(hospital) {
    searchHospitalInput.value = hospital.name; // Mettre le nom de l'hôpital dans le champ
    hospitalSuggestionsList.classList.add('hidden'); // Masquer la liste des suggestions
}

// Event listener pour rechercher les hôpitaux en temps réel
searchHospitalInput.addEventListener('input', (event) => {
    const query = event.target.value.trim();
    if (query.length >= 2) { // Démarrer la recherche après 2 caractères
        searchHospitals(query);
    } else {
        hospitalSuggestionsList.classList.add('hidden'); // Masquer les suggestions si moins de 2 caractères
    }
});
