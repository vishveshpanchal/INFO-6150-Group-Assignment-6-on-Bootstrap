document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const regExEmail = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/; 
        if (!email.match(regExEmail) || password !== "Info6150") {
            alert('Invalid email or password');
        } else {
            window.location.href = 'home.html';
        }
    });
});
