const clickNavBurger = document.querySelector('.navigation-burger');
const iconBurger = document.querySelector('i.fa-bars');
const iconX = document.querySelector('i.fa-times');
const navContent = document.querySelector('.navigation-content');

clickNavBurger.addEventListener('click', function () {
    iconBurger.classList.toggle('show');
    iconX.classList.toggle('show');
    navContent.classList.toggle('show');
})
