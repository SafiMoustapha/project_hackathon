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
    const hospitalIdInput = document.getElementById("hospitalId");

    // Fonction pour rechercher des hôpitaux
    hospitalInput.addEventListener('input', () => {
        const searchQuery = hospitalInput.value.trim().toLowerCase();

        if (searchQuery.length > 2) {
            fetch(`http://localhost:5000/api/hospitals?search=${searchQuery}`)
                .then(response => response.json())
                .then(data => {
                    suggestionsList.innerHTML = ''; // Effacer les anciennes suggestions
                    console.log("Réponse API:", data); // Voir ce que l'API renvoie
                    if (data.hospitals.length === 0) {
                        suggestionsList.classList.add('hidden');
                        return;
                    }

                    data.hospitals.forEach(hospital => {
                        const listItem = document.createElement('li');
                        listItem.textContent = hospital.name;
                        listItem.dataset.id = hospital._id; // Stocker l'ID de l'hôpital
                        listItem.classList.add('cursor-pointer', 'py-2', 'px-4', 'hover:bg-gray-200');

                        listItem.addEventListener('click', () => {
                            hospitalInput.value = hospital.name;  // Remplir l'input avec le nom de l'hôpital
                            hospitalIdInput.value = hospital._id; // Stocker l'ID dans l'input caché
                            console.log("Hôpital sélectionné:", hospital.name, " | ID:", hospital._id); // Debugging
                            suggestionsList.classList.add('hidden');  // Masquer la liste
                        });

                        suggestionsList.appendChild(listItem);
                    });

                    suggestionsList.classList.remove('hidden'); // Afficher la liste
                })
                .catch(error => console.error('Erreur lors de la recherche des hôpitaux:', error));
        } else {
            suggestionsList.classList.add('hidden');
        }
    });

    // Cacher la liste si l'utilisateur clique en dehors
    document.addEventListener("click", function (event) {
        if (!hospitalInput.contains(event.target) && !suggestionsList.contains(event.target)) {
            suggestionsList.classList.add("hidden");
        }
    });
    console.log("ID final envoyé:", feedbackData.hospitalId);
    // Soumission du formulaire
    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const formData = new FormData(this);
        const feedbackData = {
            nom: document.getElementById('nom').value,
            email: document.getElementById('email').value,
            hopital: document.getElementById('searchHospital').value,
            hospitalId: document.getElementById('hospitalId').value,
            avis: document.getElementById('avis').value,
            type_avis: document.getElementById('type_avis').value,
            note: document.getElementById('note').value,
        };
    
        console.log("Données envoyées au serveur:");
        formData.forEach((value, key) => console.log(`${key}:`, value));
    
        // Vérifications des champs
        if (!feedbackData.hospitalId || feedbackData.hospitalId.trim() === '') {
            alert("Veuillez sélectionner un hôpital valide !");
            return;
        }
        if (!feedbackData.nom || feedbackData.nom.trim() === '') {
            alert("Veuillez entrer votre nom !");
            return;
        }
        if (!feedbackData.email || feedbackData.email.trim() === '') {
            alert("Veuillez entrer votre email !");
            return;
        }
        if (!feedbackData.avis || feedbackData.avis.trim() === '') {
            alert("Veuillez entrer votre avis !");
            return;
        }
        if (!feedbackData.type_avis || feedbackData.type_avis.trim() === '') {
            alert("Veuillez sélectionner un type d'avis !");
            return;
        }
        if (!feedbackData.note || feedbackData.note.trim() === '') {
            alert("Veuillez entrer une note !");
            return;
        }
    
        // Envoi des données au serveur
        fetch('http://localhost:5000/api/feedback', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Afficher le message de succès
                alert('Votre avis a été pris en compte !');
                const successMessage = document.getElementById('successMessage');
                successMessage.classList.remove('hidden');  // Afficher le message
                successMessage.innerText = 'Votre avis a été pris en compte, merci !';
    
                // Réinitialiser le formulaire (optionnel)
                document.getElementById('reviewForm').reset();
            } else {
                alert('Erreur lors de la soumission de l\'avis');
            }
        })
        .catch(error => console.error('Erreur de soumission de l\'avis:', error));
    });    
});
