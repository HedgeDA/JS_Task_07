let currentSlide;
let actions = {};

function actionClick(event) {
  if (event.target.disabled || actions.hasOwnProperty(event.target)){
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

  actions.first.disabled = !currentSlide.previousElementSibling;
  actions.prev.disabled = !currentSlide.previousElementSibling;

  actions.last.disabled = !currentSlide.nextElementSibling;
  actions.next.disabled = !currentSlide.nextElementSibling;
}

function init() {
  for (let a of document.getElementsByTagName('a')) {
    actions[a.dataset.action] = a;

    a.addEventListener('click', actionClick);
  }

  currentSlide = document.querySelector('.slides').firstElementChild;
  currentSlide.classList.add('slide-current');

  actions.first.disabled = true;
  actions.prev.disabled = true;
}

document.addEventListener('DOMContentLoaded', init);
