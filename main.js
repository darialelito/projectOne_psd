const clickNavBurger = document.querySelector('.navigation-burger');
const iconBurger = document.querySelector('i.fa-bars');
const iconX = document.querySelector('i.fa-times');
const navContent = document.querySelector('.navigation-content');


window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector('.navigation').classList.add('scroll')
    } else {
        document.querySelector('.navigation').classList.remove('scroll');
    }
})

clickNavBurger.addEventListener('click', function () {
    iconBurger.classList.toggle('show');
    iconX.classList.toggle('show');
    navContent.classList.toggle('show');
})
