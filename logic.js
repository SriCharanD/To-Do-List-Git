const input = document.getElementById('input-text');
const list = document.getElementById('list');
const button = document.getElementById('btn');

input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    button.click();
  }
});

function logic() {
  const inputValue = input.value.trim(); // Trim to remove leading and trailing whitespaces
  if (inputValue === '') {
    alert('Please add some task');
  } else {
    createTask(inputValue);
  }
  input.value = '';
  savedata();
}

function createTask(taskText) {
  const li = document.createElement('li');
  li.innerText = taskText;

  const span = document.createElement('span');
  span.innerText = '\u00d7';

  li.appendChild(span);
  list.appendChild(li);
}

list.addEventListener('click', function (e) {
  const targetElement = e.target;

  if (targetElement.tagName === 'LI') {
    targetElement.classList.toggle('checked');
  } else if (targetElement.tagName === 'SPAN') {
    targetElement.parentElement.remove();
  }

  savedata();
}, false);

function savedata() {
  localStorage.setItem('data', list.innerHTML);
}

function showTask() {
  list.innerHTML = localStorage.getItem('data');
}

showTask();
