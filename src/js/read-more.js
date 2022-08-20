let readMore = document.querySelector('#services__show-more');
let label = document.querySelector('.services__label');
let icon = readMore.querySelector('.services__icon');
let container = document.querySelector('.services__text');
let items = container.querySelectorAll('.text__item');

readMore.addEventListener('click', function() {
  container.classList.toggle('showed');
  readMore.classList.toggle('active');
  icon.classList.toggle('icon--rotate');

  for (let i = 0; i < items.length; i++) {
    items[i].classList.toggle('showed');
  }

  if (readMore.classList.contains('active')) {
    label.textContent = 'Скрыть';
  } else {
    label.textContent = 'Читать далее';
  }
});
