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


  function allerAccueil(page) {
    // Redirection immédiate
    window.location.href = accueil;
}
function allerIndex(page) {
    // Cette ligne ordonne au navigateur de charger la nouvelle page
    window.location.href = Index.html;
}
function allerFilieres(page) {
    // Cette ligne ordonne au navigateur de charger la nouvelle page
    window.location.href = 'Filiere.html';
}

function allerContact(page) {
    // Cette ligne ordonne au navigateur de charger la nouvelle page
    window.location.href = 'Contact.html';
}