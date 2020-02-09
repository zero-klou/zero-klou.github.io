'use strict';
let button = document.querySelector('.header__down-btn');
button.addEventListener('click', () => {
    window.scrollTo(0, 730);
});
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 530) {
        document.querySelector('.main-nav').classList.add('main-nav_active');
    } else {
        document.querySelector('.main-nav').classList.remove('main-nav_active');
    }
});