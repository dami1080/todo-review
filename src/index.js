import './style.css';

const todoArr = [
  { description: 'Go to the cinema', completed: false, index: 1 },
  { description: 'Watch football', completed: false, index: 2 },
  { description: 'Have fun with my friends', completed: false, index: 3 },
];

const displayTodo = (arr) => {
  const todoListContainer = document.querySelector('.todo-list');
  const ul = document.createElement('ul');
  todoListContainer.appendChild(ul);

  arr.forEach((e) => {
    const li = document.createElement('li');
    li.className = 'list-item p-3';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = e.description;

    const listMenuIcon = document.createElement('i');
    listMenuIcon.className = 'fas fa-ellipsis-v';

    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(listMenuIcon);
    ul.appendChild(li);
  });
};

displayTodo(todoArr);