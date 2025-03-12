let burger2 = document.querySelector('#burger2');
let menu2 = document.querySelector('#menu2');
let croix2 = document.querySelector('#croix2');
let deroulant12 = document.querySelector('#deroulant12');
let deroulant22 = document.querySelector('#deroulant22');
let derouler12 = document.querySelector('#derouler12');
let derouler22 = document.querySelector('#derouler22');

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
    const searchHospital = document.getElementById("searchHospital");
    const hospitalSuggestions = document.getElementById("hospitalSuggestions");
    const form = document.getElementById("reviewForm");

    console.log("searchInput:", searchHospital);
    console.log("suggestionsList:", hospitalSuggestions);
    console.log("reviewForm:", form);

    // Vérifier si les éléments existent
    if (!searchHospital || !hospitalSuggestions || !form) {
        console.error("Un ou plusieurs éléments manquent dans le DOM.");
        return;
    }

    let hospitals = []; // Stocker tous les hôpitaux ici

    // Fonction pour charger les hôpitaux depuis l'API
    function loadHospitals() {
        fetch("/api/hospitals")
            .then(response => response.json())
            .then(data => {
                console.log("Données des hôpitaux :", data);  // Affiche les données dans la console
                hospitals = data; // Sauvegarder les hôpitaux dans la variable
            })
            .catch(error => console.error("Erreur lors du chargement des hôpitaux :", error));
    }

    // Fonction pour filtrer les hôpitaux en fonction de la recherche
    function filterHospitals(searchValue) {
        hospitalSuggestions.innerHTML = ""; // Vider la liste des suggestions

        // Si la recherche est vide, ne rien afficher
        if (!searchValue.trim()) {
            hospitalSuggestions.classList.add("hidden");
            return;
        }

        // Filtrer les hôpitaux qui correspondent à la recherche
        const filteredHospitals = hospitals.filter(hospital =>
            hospital.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        // Si des hôpitaux sont trouvés, les afficher
        if (filteredHospitals.length > 0) {
            hospitalSuggestions.classList.remove("hidden");

            filteredHospitals.forEach(hospital => {
                const li = document.createElement("li");
                li.textContent = hospital.name;
                li.classList.add("cursor-pointer", "px-2", "py-1", "hover:bg-[#f1f1f1]");
                li.onclick = () => selectHospital(hospital);

                hospitalSuggestions.appendChild(li);
            });
        } else {
            hospitalSuggestions.classList.add("hidden");
        }
    }

    // Sélectionner un hôpital dans la liste des suggestions
    function selectHospital(hospital) {
        searchHospital.value = hospital.name; // Remplir le champ de recherche
        hospitalSuggestions.classList.add("hidden"); // Masquer la liste des suggestions
    }

    // Ajouter un écouteur d'événements pour la recherche
    searchHospital.addEventListener("input", (event) => {
        filterHospitals(event.target.value); // Appeler la fonction de filtrage lors de la saisie
    });

    // Charger les hôpitaux à l'ouverture de la page
    loadHospitals();

    // Gestion de la soumission du formulaire
    form.addEventListener("submit", (event) => {
        const selectedHospital = searchHospital.value;
        if (!selectedHospital) {
            alert("Veuillez sélectionner un hôpital.");
            event.preventDefault();
        }
    });
});




