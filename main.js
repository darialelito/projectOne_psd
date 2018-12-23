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


    // section features --> features.png move during scroll
    if (document.documentElement.scrollTop > document.querySelector('.features').offsetTop) {
        document.querySelector('.features__png').classList.add('active');
    }
    if (document.documentElement.scrollTop < document.querySelector('.features').offsetTop) {
        document.querySelector('.features__png').classList.remove('active');
    }
})

clickNavBurger.addEventListener('click', function () {
    iconBurger.classList.toggle('show');
    iconX.classList.toggle('show');
    navContent.classList.toggle('show');
})
