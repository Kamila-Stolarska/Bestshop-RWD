const bars = document.querySelector('.hamburger-icon');
const navList = document.querySelector('nav ul');

bars.addEventListener('click', function () {
    navList.classList.toggle('active');
});

