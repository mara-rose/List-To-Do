// instead use two array we use one array with objects
let todoList = JSON.parse(localStorage.getItem('list')) || [];

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    AddToDo();
  });
function AddToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;
  const timeInputElement = document.querySelector('.js-time-input');
  const time = timeInputElement.value;
  if (name && date && time) {
    todoList.push({
      name: name,
      dueDate: date,
      time: time
    });
    inputElement.value = '';
    renderTodoList();
    document.querySelector('.js-note-input').innerHTML = '';
    localStorage.setItem('list', JSON.stringify(todoList));

  } else {
    if (!name) {
      document.querySelector('.js-note-input').innerHTML = 'Your input list is empty !! . Put Something';

    } else if (!date) {
      document.querySelector('.js-note-input').innerHTML = 'Your date of your list is empty . Put something';
    }
    else {
      document.querySelector('.js-note-input').innerHTML = 'You time of your list is empty . Put something';
    }
  }
};
function renderTodoList() {
  let todoHTML = '';
  todoList.forEach((todoObject, i) => {
    const { name } = todoObject;
    const dueDate = todoObject.dueDate;
    const time = todoObject.time;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <div>${time}</div>
    <button class="delete-button" onclick="
    todoList.splice(${i},1);
    renderTodoList();
    localStorage.setItem('list', JSON.stringify(todoList));
    ">Delete</button>
    `;
    todoHTML += html;
  });
  document.querySelector('.js-bottom-row').innerHTML = `
    <p>You have ${todoList.length} items.</p>
    <button class="delete-all-button" onclick="
    todoList.splice(0,todoList.length);
    renderTodoList();
    localStorage.setItem('list', JSON.stringify(todoList));
    ">Delete</button>
  `;

  document.querySelector('.js-to-list').innerHTML = todoHTML;
};
renderTodoList();