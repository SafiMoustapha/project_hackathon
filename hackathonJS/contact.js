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
    console.log('toggleDerouler1 called');
    derouler12.classList.toggle('hidden');
}

function toggleDerouler22() {
    console.log('toggleDerouler2 called');
    derouler22.classList.toggle('hidden');
}

burger2.addEventListener('click', () => {
    console.log('burger clicked');
    toggleMenu();
});

croix2.addEventListener('click', () => {
    console.log('croix clicked');
    toggleMenu();
});

deroulant12.addEventListener('click', () => {
    console.log('deroulant1 clicked');
    toggleDerouler12();
});

deroulant22.addEventListener('click', () => {
    console.log('deroulant2 clicked');
    toggleDerouler22();
});

function envoyerMessage() {
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (nom !== "" && email !== "" && message !== "") {
        const messagesList = document.getElementById("messages-list");
        messagesList.innerHTML += `
            <div class="p-4 border rounded-lg bg-gray-100">
                <p class="font-semibold">${nom} (${email})</p>
                <p class="text-gray-600">${message}</p>
            </div>
        `;

        // Réinitialiser les champs du formulaire
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}