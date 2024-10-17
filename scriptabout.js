const hamburgerBtn = document.getElementById('hamburgerBtn');
const navbar = document.querySelector('.navbar');

hamburgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});