let currentSlide;
let actions = {};

function actionClick(event) {
  if (event.target.classList.contains('disabled') || actions.hasOwnProperty(event.target)) {
    event.preventDefault();
    return false;
  }

  currentSlide.classList.remove('slide-current');

  switch (event.target) {
    case actions.first:
      currentSlide = currentSlide.parentElement.firstElementChild;
      break;
    case actions.prev:
      currentSlide = currentSlide.previousElementSibling;
      break;
    case actions.next:
      currentSlide = currentSlide.nextElementSibling;
      break;
    case actions.last:
      currentSlide = currentSlide.parentElement.lastElementChild;
      break;
  }

  currentSlide.classList.add('slide-current');

  checkAccessibility();
}

function checkAccessibility() {
  if (currentSlide.previousElementSibling) {
    actions.first.classList.remove('disabled');
    actions.prev.classList.remove('disabled');
  } else {
    actions.first.classList.add('disabled');
    actions.prev.classList.add('disabled');
  }

  if (currentSlide.nextElementSibling) {
    actions.last.classList.remove('disabled');
    actions.next.classList.remove('disabled');
  } else {
    actions.last.classList.add('disabled');
    actions.next.classList.add('disabled');
  }
}

function init() {
  for (let a of document.getElementsByTagName('a')) {
    actions[a.dataset.action] = a;

    a.addEventListener('click', actionClick);
  }

  currentSlide = document.querySelector('.slides').firstElementChild;
  currentSlide.classList.add('slide-current');

  actions.first.classList.add('disabled');
  actions.prev.classList.add('disabled');
}

document.addEventListener('DOMContentLoaded', init);
