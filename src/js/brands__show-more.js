let showMore = document.querySelector('#brands__show-more');
let label = document.querySelector('.brands__label');
let icon = showMore.querySelector('.brands__icon');
let list = document.querySelector('.brands__list');

showMore.addEventListener('click', function() {
  list.classList.toggle('showed');
  showMore.classList.toggle('active');
  icon.classList.toggle('icon--rotate');

  if (showMore.classList.contains('active')) {
    label.textContent = 'Скрыть';
  } else {
    label.textContent = 'Показать все';
  }
});
