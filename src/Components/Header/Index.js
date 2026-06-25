window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }})
    document.getElementById(btn-connexion).addEventListener("click",function(){
        window.location.href = "/src/page/Login/Login.html";
    });
   
    

  
function allerIndex(page) {
    // Cette ligne ordonne au navigateur de charger la nouvelle page
    window.location.href = Index.html;
}
function allerFilieres(page) {
    // Cette ligne ordonne au navigateur de charger la nouvelle page
    window.location.href = 'Filiere.html';
}

 function allerAccueil(page) {
    
    window.location.href = 'Session.html';
}

function allerContact(page) {
    // Cette ligne ordonne au navigateur de charger la nouvelle page
    window.location.href = 'Contact.html';
}