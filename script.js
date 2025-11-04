const todoList = [];

function AddToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;
  todoList.push({
    name: name,
    dueDate: date
  });
  inputElement.value = '';
  renderTodoList();
}
function renderTodoList() {
  let todoHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name } = todoObject;
    const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onclick="
    todoList.splice(${i},1);
    renderTodoList();
    ">Delete</button>
    `;
    todoHTML += html;
  }
  document.querySelector('.js-to-list').innerHTML = todoHTML;
}