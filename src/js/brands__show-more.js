let readMore = document.querySelector('#brands__show-more');
console.log(readMore);
let label = document.querySelector('.brands__label');
let icon = readMore.querySelector('.brands__icon');
let list = document.querySelector('.brands__list');

readMore.addEventListener('click', function() {
  list.classList.toggle('showed');
  readMore.classList.toggle('active');
  icon.classList.toggle('icon--rotate');

  if (readMore.classList.contains('active')) {
    label.textContent = 'Скрыть';
  } else {
    label.textContent = 'Показать все';
  }
});
