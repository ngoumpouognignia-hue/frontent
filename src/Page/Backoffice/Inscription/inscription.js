document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vous pourriez envoyer ces informations à un serveur ici

    document.getElementById('message').textContent = `Inscription réussie pour ${name}!`;
    document.getElementById('message').classList.remove('hidden');

    // Réinitialiser le formulaire
    this.reset();
});

let inscriptions = [
    { id: 1, date: '2026-01-15', statut: 'en_attente', montant: 50000, mode: 'Mobile Money' },
    { id: 2, date: '2026-01-16', statut: 'en_attente', montant: 75000, mode: 'Carte Bancaire' }
];

function afficherTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = inscriptions.map(i => `
        <tr>
            <td>${i.id}</td>
            <td>${i.nom} ${i.prenom}</td>
            <td>${i.date}</td>
            <td>${i.statut}</td>
            <td>${i.montant}</td>
            <td>${i.mode}</td>
            <td>
                <button onclick="supprimer(${i.id})">Supprimer</button>
            </td>
        </tr>
    `).join('');
}
function sauvegarder() {
    const nouvelleInscription = {
        id: inscriptions.length + 1,
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        date: new Date().toISOString().split('T')[0],
        statut: 'en attente',
        montant: document.getElementById('montant').value,
        mode: document.getElementById('mode').value
    };
    inscriptions.push(nouvelleInscription);
    afficherTable();
    fermerModal();
}


function ouvrirModal() { document.getElementById('modal').style.display = 'block'; }
function fermerModal() { document.getElementById('modal').style.display = 'none'; }

function supprimer(id) {
    inscriptions = inscriptions.filter(i => i.id !== id);
    afficherTable();
}

// Initialisation
afficherTable();