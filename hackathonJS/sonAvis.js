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


document.addEventListener("DOMContentLoaded", () => {
    const hospitalInput = document.getElementById('searchHospital');
    const suggestionsList = document.getElementById('hospitalSuggestions');

    // Fonction de recherche des hôpitaux
    hospitalInput.addEventListener('input', () => {
        const searchQuery = hospitalInput.value.trim().toLowerCase();

        if (searchQuery) {
            fetch(`http://localhost:5000/api/hospitals?search=${searchQuery}`)
                .then(response => response.json())
                .then(data => {
                    // Afficher la liste des suggestions d'hôpitaux
                    suggestionsList.innerHTML = ''; // Clear previous results
                    data.hospitals.forEach(hospital => {
                        const listItem = document.createElement('li');
                        listItem.textContent = hospital.name;
                        listItem.classList.add('cursor-pointer', 'py-2', 'px-4');
                        listItem.addEventListener('click', () => {
                            hospitalInput.value = hospital.name;  // Remplir l'input avec le nom de l'hôpital
                            suggestionsList.classList.add('hidden');  // Masquer la liste
                        });
                        suggestionsList.appendChild(listItem);
                    });

                    // Afficher la liste si des résultats existent
                    suggestionsList.classList.remove('hidden');
                })
                .catch(error => console.error('Erreur lors de la recherche des hôpitaux:', error));
        } else {
            suggestionsList.classList.add('hidden');
        }
    });

    // Soumettre le formulaire
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const feedbackData = {};

    formData.forEach((value, key) => {
        feedbackData[key] = value;
    });

    // Vérification de la structure de feedbackData
    console.log("Données envoyées au serveur:", JSON.stringify(feedbackData, null, 2));

    // Soumettre les données à l'API
    fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        body: JSON.stringify(feedbackData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Avis soumis avec succès !');
        } else {
            alert('Erreur lors de la soumission de l\'avis');
        }
    })
    .catch(error => console.error('Erreur de soumission de l\'avis:', error));
});
    
});
