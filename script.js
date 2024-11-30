document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Dziękujemy za wiadomość, ${name}! Odpowiemy na Twój adres: ${email}`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Wszystkie pola są wymagane!");
    }
});
