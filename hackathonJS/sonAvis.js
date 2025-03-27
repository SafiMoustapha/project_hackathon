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
        // Récupérer les données du formulaire
        const feedbackData = {
            nom: document.getElementById('nom').value,
            email: document.getElementById('email').value,
            hopital: document.getElementById('hopital').value,
            hospitalId: document.getElementById('hospitalId').value,  // Assure-toi d'avoir ce champ dans ton formulaire
            avis: document.getElementById('avis').value,
            type_avis: document.getElementById('type_avis').value,
            note: document.getElementById('note').value,
        };
    
        // Vérification avant l'envoi
        console.log("Données envoyées au serveur:");
        formData.forEach((value, key) => console.log(`${key}:`, value));

        // ✅ Vérifier si hospitalId est bien rempli
        if (!feedbackData.hospitalId || feedbackData.hospitalId.trim() === '') {
            alert("Veuillez sélectionner un hôpital valide !");
            return;
        }

        // ✅ Vérifier si le nom est bien rempli
        if (!feedbackData.nom || feedbackData.nom.trim() === '') {
            alert("Veuillez entrer votre nom !");
            return;
        }

        // ✅ Vérifier si l'email est bien rempli
        if (!feedbackData.email || feedbackData.email.trim() === '') {
            alert("Veuillez entrer votre email !");
            return;
        }

        // ✅ Vérifier si l'avis est bien rempli
        if (!feedbackData.avis || feedbackData.avis.trim() === '') {
            alert("Veuillez entrer votre avis !");
            return;
        }

        // ✅ Vérifier si le type d'avis est bien rempli
        if (!feedbackData.type_avis || feedbackData.type_avis.trim() === '') {
            alert("Veuillez sélectionner un type d'avis !");
            return;
        }

        // ✅ Vérifier si la note est bien remplie
        if (!feedbackData.note || feedbackData.note.trim() === '') {
            alert("Veuillez entrer une note !");
            return;
        }

        if (feedbackData.hospitalId && feedbackData.hospitalId.trim() === '') {
            alert("L'ID de l'hôpital est invalide !");
            return;
        }
    
        // Envoyer en multipart/form-data au lieu de JSON
        fetch('http://localhost:5000/api/feedback', {
            method: 'POST',
            body: formData // Pas besoin de headers Content-Type, il est défini automatiquement
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
