// Données simulées de la session utilisateur
const userSession = {
    nom: "Jean Dupont",
    filiere: "Développement Web",
    formation: "Certification Fullstack",
    statutInscription: "Confirmé"
};

// Afficher les infos de session
function chargerSession() {
    const sessionDiv = document.getElementById('session-info');
    sessionDiv.innerHTML = `
        <div class="card">
            <h3>Bienvenue, ${userSession.nom}</h3>
            <p><strong>Filière :</strong> ${userSession.filiere}</p>
            <p><strong>Formation :</strong> ${userSession.formation}</p>
            <p><strong>Statut :</strong> ${userSession.statutInscription}</p>
        </div>
    `;
}

// Gestion de la déconnexion
const btnDeconnexion = document.getElementById('btn-deconnexion');
if (btnDeconnexion) {
    btnDeconnexion.addEventListener('click', () => {
        if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
            window.location.href = "/Index.html";
        }
    });
}

// Initialisation au chargement
window.onload = chargerSession;