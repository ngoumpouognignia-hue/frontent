document.addEventListener('includesLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Connexion réussie ! Redirection...");
    });

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (!nav) return;

        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `&copy; ${currentYear} PROMILLYS ACADEMY. Tous droits réservés.`;
    }
});
