let done;
let undone;

function labelClick(event) {
  event.preventDefault();

  let label;

  if (event.target.getElementsByTagName('input')[0].checked) {
    label = done.removeChild(event.target);
  } else {
    label = undone.removeChild(event.target);
  }

  label.getElementsByTagName('input')[0].checked = !label.getElementsByTagName('input')[0].checked;

  if (label.getElementsByTagName('input')[0].checked) {
    done.appendChild(event.target);
  } else {
    undone.appendChild(event.target);
  }
}

function init() {
  done = document.querySelector('.done');
  undone = document.querySelector('.undone');

  for (let label of document.getElementsByTagName('label')) {
    label.addEventListener('click', labelClick);
  }
}

document.addEventListener('DOMContentLoaded', init);
