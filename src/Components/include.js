async function loadIncludes() {
    const includes = [
        { selector: '#header', url: '/src/Components/Header/Index.html' },
        { selector: '#footer', url: '/src/Components/Footer/Index.html' }
    ];

    await Promise.all(
        includes.map(async ({ selector, url }) => {
            const element = document.querySelector(selector);
            if (!element) return;

            const response = await fetch(url);
            element.outerHTML = await response.text();
        })
    );

    document.dispatchEvent(new Event('includesLoaded'));
}

document.addEventListener('DOMContentLoaded', loadIncludes);


  
function allerIndex(page) {
    // Cette ligne ordonne au navigateur de charger la nouvelle page
    window.location.href = 'Index.html';
}
function allerFilieres(page) {
      window.location.href = '/src/Components/Page/Filiere.html';
}

 function allerSession(page) {
    window.location.href = '/src/Components/Page/Session.html';
}

function allerContact(page) {
    // Cette ligne ordonne au navigateur de charger la nouvelle page
    window.location.href = '/src/Components/Page/Contact.html';
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
window.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    
    // Si on clique en dehors de la sidebar ET en dehors du bouton menu
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});