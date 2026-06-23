document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci de votre message, Promillys Academy vous répondra dès que possible.');
    this.reset();
});