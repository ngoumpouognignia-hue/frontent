// Validation simple du formulaire
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Connexion réussie ! Redirection...");
});

// Effet de défilement sur le menu
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }

    // Mise à jour automatique de l'année dans le footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector('.footer-bottom p');
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = &copy; ${currentYear} ACADEMY-TECH. Tous droits réservés.;
}); 
};