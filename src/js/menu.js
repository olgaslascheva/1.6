let menu = document.querySelector('.menu');
let menuWrapper = menu.querySelector('.menu__wrapper');
let burger = document.querySelector('.header__burger');
let burgerClose = menu.querySelector('.menu__close');
let overlay = menu.querySelector('.menu__overlay');

burger.addEventListener('click', function() {
  menuWrapper.classList.add('opened');
  menu.classList.add('opened');
  overlay.classList.add('opened');
});

burgerClose.addEventListener('click', function() {
  menuWrapper.classList.remove('opened');
  menu.classList.remove('opened');
  overlay.classList.remove('opened');
});

overlay.addEventListener('click', function() {
  menuWrapper.classList.remove('opened');
  menu.classList.remove('opened');
  overlay.classList.remove('opened');
});
