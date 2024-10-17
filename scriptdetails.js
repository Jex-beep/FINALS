document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navbar = document.getElementById('navbar');

    hamburgerBtn.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Toggle the active class on the navbar
    });
});
