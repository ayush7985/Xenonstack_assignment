document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const contactBtn = document.getElementById('contactBtn');
    const loginModal = document.getElementById('loginModal');
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('closeBtn');
    const closeContactBtn = document.getElementById('closeContactBtn');

    burgerMenu.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    });

    loginBtn.addEventListener('click', function () {
        loginModal.style.display = 'block';
    });

    contactBtn.addEventListener('click', function () {
        contactModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    closeContactBtn.addEventListener('click', function () {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add your login logic here
        // For simplicity, let's just show an alert
        const username = document.getElementById('username').value;
        alert(`Login Form Submitted\nUsername: ${username}`);
        // Clear the form fields
        loginForm.reset();
        loginModal.style.display = 'none';
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add your contact form submission logic here
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // For now, just show an alert with the form data
        alert(`Contact Form Submitted\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Clear the form fields
        contactForm.reset();
        contactModal.style.display = 'none';
    });

    logoutBtn.addEventListener('click', function () {
        // Add your logout logic here
        // For simplicity, let's just hide the logout button and show the login button
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    });
});
