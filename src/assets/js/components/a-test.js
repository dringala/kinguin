const navToggleBtn = document.querySelector('.nav__toggle-btn');
const navToggleWrapper = document.querySelector('.nav__mobile-wrapper');
const navCloseBtn = document.querySelector('.nav__close-btn');
const navigation = document.querySelector('.navigation');
const navMobile = document.querySelector('.nav__mobile');

let navClone = navigation.cloneNode(true);
navMobile.after(navClone);

navToggleBtn.addEventListener('click', () => navToggleWrapper.classList.add('is-open'));
navCloseBtn.addEventListener('click', () => navToggleWrapper.classList.remove('is-open'));


